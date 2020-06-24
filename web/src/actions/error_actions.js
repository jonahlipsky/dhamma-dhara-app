export const RECEIVE_HTTP_REQUEST_ERRORS = 'HTTP_REQUEST_ERRORS';

export const receiveHttpRequestErrors = errors => ({
  type: RECEIVE_HTTP_REQUEST_ERRORS,
  errors
})