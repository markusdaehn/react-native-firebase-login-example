export const SIGNIN_SUBMIT = 'yuzsa/screens/signin/submit';
/**
 * @param {Object} payload - form data
 * @param {string} payload.email
 * @param {string} payload.password
 */
export function signInSubmit(payload) {
  return {
    type: SIGNIN_SUBMIT,
    payload,
  };
}

export const SIGNIN_REQUEST = 'yuzsa/screens/signin/request';
/**
 * @param {Object} payload - post data
 * @param {string} payload.email
 * @param {string} payload.password
 */
export function signInRequest(payload) {
  return {
    type: SIGNIN_REQUEST,
    payload,
  };
}

export const SIGNIN_SUCCESS = 'yuzsa/screens/signin/succeeded';
/**
 * @param {Object} payload - User
 * @param {string} payload.id
 * @param {string} payload.token
 */
export function signInSuccess (payload) {
  return {
    type: SIGNIN_SUCCESS,
    payload
  };
}

export const SIGNIN_FAILURE = 'yuzsa/screens/signin/failure';
/**
 * @param {Object} payload - error
 */
export function signInFailure(payload) {
  return {
    type: SIGNIN_FAILURE,
    payload,
    error: true,
  }
}
