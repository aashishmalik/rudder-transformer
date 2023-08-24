const { removeUndefinedValues } = require('../../util');
const { getAccessToken, handlePollResponse } = require('./util');
const { handleHttpRequest } = require('../../../adapters/network');
const stats = require('../../../util/stats');
const { RetryableError } = require('../../util/errorTypes');
const { JSON_MIME_TYPE } = require('../../util/constant');
const { POLL_ACTIVITY } = require('./config');

const getPollStatus = async (event) => {
  const accessToken = await getAccessToken(event.config);
  const { munchkinId } = event.config;

  // To see the status of the import job polling is done
  // DOC: https://developers.marketo.com/rest-api/bulk-import/bulk-lead-import/#polling_job_status
  const requestOptions = {
    headers: {
      'Content-Type': JSON_MIME_TYPE,
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const pollUrl = `https://${munchkinId}.mktorest.com/bulk/v1/leads/batch/${event.importId}.json`;
  const startTime = Date.now();
  const { processedResponse: pollStatus } = await handleHttpRequest(
    'get',
    pollUrl,
    requestOptions,
    {
      destType: 'marketo_bulk_upload',
      feature: 'transformation',
    },
  );
  const endTime = Date.now();
  const requestTime = endTime - startTime;
  const POLL_STATUS_ERR_MSG = 'Could not poll status';

  if (pollStatus.status === 200) { // TODO: use isSuccessHttp // TODO: make it opposite
    return handlePollResponse(pollStatus);
  }
  stats.counter(POLL_ACTIVITY, {
    status: 500,
    state: 'Retryable',
  });
  throw new RetryableError(POLL_STATUS_ERR_MSG, 500, pollStatus);
};

const responseHandler = async (event) => {
  let success = false;
  let statusCode = 500;
  let hasFailed;
  let FailedJobURLs;
  let hasWarnings;
  let WarningJobsURLs;
  let error;
  let InProgress = false;
  const pollResp = await getPollStatus(event);
  // Server expects :
  /**
  *
  * {
    "Complete": true,
    "statusCode": 200,
    "hasFailed": true,
    "InProgress": false,
    "FailedJobURLs": "<some-url>", // transformer URL
    "hasWarnings": false,
    "WarningJobsURLs": "<some-url>", // transformer URL
    } // Succesful Upload
    {
        "success": false,
        "statusCode": 400,
        "errorResponse": <some-error-response>
    } // Failed Upload
    {
        "success": false,
    } // Importing or Queue

  */
  if (pollResp) {
      // As marketo lead import API or bulk API does not support record level error response we are considering
      // file level errors only.
      // ref: https://nation.marketo.com/t5/ideas/support-error-code-in-record-level-in-lead-bulk-api/idi-p/262191
      const { status, numOfRowsFailed, numOfRowsWithWarning } = pollResp.result[0];
      if (status === 'Complete') {
        success = true;
        statusCode = 200;
        hasFailed = numOfRowsFailed > 0;
        FailedJobURLs = '/getFailedJobs';
        WarningJobsURLs = '/getWarningJobs';
        hasWarnings = numOfRowsWithWarning > 0;
      } else if (status === 'Importing' || status === 'Queued') {
        success = false;
        InProgress = true;
      } 
  }
  const response = {
    Complete: success,
    statusCode,
    hasFailed,
    InProgress,
    FailedJobURLs,
    hasWarnings,
    WarningJobsURLs,
    error,
  };
  return removeUndefinedValues(response);
};

const processPolling = async (event) => {
  const resp = await responseHandler(event);
  return resp;
};

module.exports = { processPolling };
