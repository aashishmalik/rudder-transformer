const { removeUndefinedValues } = require('../../util');
const { getAccessToken,POLL_ACTIVITY, handlePollResponse } = require('./util');
const { handleHttpRequest } = require('../../../adapters/network');
const stats = require('../../../util/stats');
const { RetryableError } = require('../../util/errorTypes');
const { JSON_MIME_TYPE } = require('../../util/constant');

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
    
  if (pollStatus.status === 200) {
    return handlePollResponse(pollStatus)
  }
  stats.counter(POLL_ACTIVITY, {
    status: 500,
    state: 'Retryable',
  });
  throw new RetryableError(POLL_STATUS_ERR_MSG, 500, pollStatus);
};

const responseHandler = async (event) => {
  const pollResp = await getPollStatus(event);
  let pollSuccess;
  let success = false;
  let statusCode = 500;
  let hasFailed;
  let FailedJobURLs;
  let hasWarnings;
  let warningJobsURL;
  let error;
  let InProgress = false;
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
    "warningJobsURL": "<some-url>", // transformer URL
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
    pollSuccess = pollResp.success;
    if (pollSuccess) {
      // As marketo lead import API or bulk API does not support record level error response we are considering 
      // file level errors only. 
      // ref: https://nation.marketo.com/t5/ideas/support-error-code-in-record-level-in-lead-bulk-api/idi-p/262191
      const { status, numOfRowsFailed, numOfRowsWithWarning } = pollResp.result[0];
      if (status === 'Complete') {
        success = true;
        statusCode = 200;
        hasFailed = numOfRowsFailed > 0;
        FailedJobURLs = '/getFailedJobs';
        warningJobsURL = '/getWarningJobs';
        hasWarnings = numOfRowsWithWarning > 0;
      } else if (status === 'Importing' || status === 'Queued') {
        success = false;
        InProgress = true;
      }
    } else {
      // status is failed
      success = false;
      statusCode = 500;
      error = pollResp.errors ? pollResp.errors[0].message : 'Error in importing jobs';
    }
  }
  const response = {
    Complete: success,
    statusCode,
    hasFailed,
    InProgress,
    FailedJobURLs,
    hasWarnings,
    warningJobsURL,
    error,
  };
  return removeUndefinedValues(response);
};

const processPolling = async (event) => {
  const resp = await responseHandler(event);
  return resp;
};

module.exports = { processPolling };
