/* eslint-disable no-param-reassign */
const _ = require('lodash');
const getValue = require('get-value');
const {
  getDynamicErrorType,
  processAxiosResponse,
} = require('../../../adapters/utils/networkUtils');
const { isHttpStatusSuccess, isDefinedAndNotNull } = require('../../util');
const {
  REFRESH_TOKEN,
  AUTH_STATUS_INACTIVE,
} = require('../../../adapters/networkhandler/authConstants');
const { proxyRequest } = require('../../../adapters/network');
const { UnhandledStatusCodeError, NetworkError, AbortedError } = require('../../util/errorTypes');
const tags = require('../../util/tags');

const DESTINATION_NAME = 'bqstream';

const trimBqStreamResponse = (response) => ({
  code: getValue(response, 'response.response.data.error.code'), // data.error.status which contains PERMISSION_DENIED
  status: getValue(response, 'response.response.status'),
  statusText: getValue(response, 'response.response.statusText'),
  headers: getValue(response, 'response.response.headers'),
  data: getValue(response, 'response.response.data'), // Incase of errors, this contains error data
  success: getValue(response, 'suceess'),
});
/**
 * Obtains the Destination OAuth Error Category based on the error code obtained from destination
 *
 * - If an error code is such that the user will not be allowed inside the destination,
 * such error codes fall under AUTH_STATUS_INACTIVE
 * - If an error code is such that upon refresh we can get a new token which can be used to send event,
 * such error codes fall under REFRESH_TOKEN category
 * - If an error code doesn't fall under both categories, we can return an empty string
 * @param {string} errorCategory - The error code obtained from the destination
 * @returns Destination OAuth Error Category
 */
const getDestAuthCategory = (errorCategory) => {
  switch (errorCategory) {
    case 'PERMISSION_DENIED':
      return AUTH_STATUS_INACTIVE;
    case 'UNAUTHENTICATED':
      return REFRESH_TOKEN;
    default:
      return '';
  }
};

const destToRudderStatusMap = {
  403: {
    rateLimitExceeded: 429,
    default: 400,
  },
  400: {
    tableUnavailable: 500,
    default: 400,
  },
  500: { default: 500 },
  503: { default: 500 },
  401: { default: 500 },
  404: { default: 400 },
  501: { default: 400 },
};

const getStatusAndCategory = (dresponse, status) => {
  const authErrorCategory = getDestAuthCategory(dresponse.error.status);
  const reason =
    dresponse.error.errors &&
    Array.isArray(dresponse.error.errors) &&
    dresponse.error.errors.length > 0 &&
    dresponse.error.errors[0].reason;

  const trStatus = destToRudderStatusMap[status]
    ? destToRudderStatusMap[status][reason] || destToRudderStatusMap[status].default
    : 500;
  return { status: trStatus, authErrorCategory };
};

/**
 * This class actually handles the response for BigQuery Stream API
 * It can also be used for any Google related API but an API related handling has to be done separately
 *
 * Here we are only trying to handle OAuth related error(s)
 * Any destination specific error handling has to be done in their own way
 *
 * Reference doc for OAuth Errors
 * 1. https://cloud.google.com/apigee/docs/api-platform/reference/policies/oauth-http-status-code-reference
 * 2. https://cloud.google.com/bigquery/docs/error-messages
 *
 * Summary:
 * Abortable -> 403, 501, 400
 * Retryable -> 5[0-9][02-9], 401(UNAUTHENTICATED)
 * "Special Cases":
 * status=200, resp.insertErrors.length > 0  === Failure
 * 403 => AccessDenied -> AUTH_STATUS_INACTIVE, other 403 => Just abort
 *
 */
const processResponse = ({ dresponse, status } = {}) => {
  const isSuccess =
    !dresponse.error &&
    isHttpStatusSuccess(status) &&
    (!dresponse.insertErrors || (dresponse.insertErrors && dresponse.insertErrors.length === 0));

  if (!isSuccess) {
    if (dresponse.error) {
      const { status: trStatus } = getStatusAndCategory(dresponse, status);
      throw new NetworkError(
        dresponse.error.message || `Request failed for ${DESTINATION_NAME} with status: ${status}`,
        trStatus,
        {
          [tags.TAG_NAMES.ERROR_TYPE]: getDynamicErrorType(trStatus),
        },
        dresponse,
      );
    } else if (dresponse.insertErrors && dresponse.insertErrors.length > 0) {
      const temp = trimBqStreamResponse(dresponse);
      throw new AbortedError(
        'Problem during insert operation',
        400,
        {
          [tags.TAG_NAMES.ERROR_TYPE]: getDynamicErrorType(temp.status || 400),
        },
        temp,
        getDestAuthCategory(temp.code),
      );
    }
    throw new UnhandledStatusCodeError('Unhandled error type while sending to destination');
  }
};

const responseHandler = (respTransformPayload) => {
  const { response, status } = respTransformPayload;
  processResponse({
    dresponse: response,
    status,
  });
  return {
    status,
    destinationResponse: response,
    message: 'Request Processed Successfully',
  };
};

function networkHandler() {
  this.responseHandler = responseHandler;
  this.proxy = proxyRequest;
  this.processAxiosResponse = processAxiosResponse;
}

const batchEvents = (inputs) => {
  const batches = [];
  let currentInputsArray = inputs;
  while (currentInputsArray.length > 0) {
    const remainingInputsArray = [];
    const userOrderTracker = {};
    const event = currentInputsArray.shift();
    const messageType = event.message.type;
    const batch = [event];
    currentInputsArray.forEach((currentInput) => {
      const currentMessageType = currentInput.message.type;
      const currentUser = currentInput.metadata.userId;
      if (currentMessageType === messageType && !userOrderTracker[currentUser]) {
        batch.push(currentInput);
      } else {
        remainingInputsArray.push(currentInput);
        userOrderTracker[currentUser] = true;
      }
    });
    batches.push(batch);
    currentInputsArray = remainingInputsArray;
  }

  return batches;
};

/**
 * Optimizes the error response by merging the metadata of the same error type and adding it to the result array.
 *
 * @param {Object} item - An object representing an error event with properties like `error`, `jobId`, and `metadata`.
 * @param {Map} errorMap - A Map object to store the error events and their metadata.
 * @param {Array} resultArray - An array to store the optimized error response.
 * @returns {void}
 */
const optimizeErrorResponse = (item, errorMap, resultArray) => {
  const currentError = item.error;
  if (errorMap.has(currentError)) {
    // If the error already exists in the map, merge the metadata
    const existingErrDetails = errorMap.get(currentError);
    existingErrDetails.metadata.push(...item.metadata);
  } else {
    // Otherwise, add it to the map
    errorMap.set(currentError, { ...item });
    resultArray.push([errorMap.get(currentError)]);
  }
};

const convertMetadataToArray = (eventList) => {
  const processedEvents = eventList.map((event) => ({
    ...event,
    metadata: Array.isArray(event.metadata) ? event.metadata : [event.metadata],
  }));
  return processedEvents;
};

/**
 * Rearranges the events based on their success or error status.
 * If there are no successful events, it groups error events with the same error and their metadata.
 * If there are successful events, it returns the batched response of successful events.
 *
 * @param {Array} eachUserSuccessEventslist - An array of objects representing successful events.
 * Each object should have an `id` and `metadata` property.
 * @param {Array} eachUserErrorEventsList - An array of objects representing error events.
 * Each object should have an `id`, `metadata`, and `error` property.
 * @returns {Array} - An array of rearranged events.
 */
const getRearrangedEvents = (eachUserSuccessEventslist, eachUserErrorEventsList) => {
  // Convert 'metadata' to an array if it's not already
  const processedSuccessfulEvents = convertMetadataToArray(eachUserSuccessEventslist);
  const processedErrorEvents = convertMetadataToArray(eachUserErrorEventsList);

  // if there are no batched response, then return the error events
  if (eachUserSuccessEventslist.length === 0) {
    const resultArray = [];
    const errorMap = new Map();
    processedErrorEvents.forEach((item) => {
      optimizeErrorResponse(item, errorMap, resultArray);
    });
    return resultArray;
  }
  // if there are no error events, then return the batched response
  return [processedSuccessfulEvents];
};

module.exports = { networkHandler, getRearrangedEvents, batchEvents };
