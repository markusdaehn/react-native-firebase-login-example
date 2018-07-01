export const SIGNIN_SUBMITTING = 'yuzsa/screens/signin/submitting';
/**
 * @param {Object} payload - post data
 * @param {string} payload.email
 * @param {string} payload.password
 */
export function signInSubmitting(payload) {
  return {
    type: SIGNIN_SUBMITTING,
    payload,
  };
}

export const SIGNIN = 'yuzsa/screens/signin';
/**
 * @param {Object} payload - post data
 * @param {string} payload.email
 * @param {string} payload.password
 */
export function signIn(payload) {
  return {
    type: SIGNIN,
    payload,
  };
}

export const SIGNIN_SUCCESS = 'yuzsa/screens/signin/success';
/**
 * @param {Object} payload - User
 * @param {string} payload.id
 * @param {string} payload.token
 */
export function signInSuccess (payload) {
  return {
    type: SIGNIN_SUCCESS,
    payload,
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
  };
}
