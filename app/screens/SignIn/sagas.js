import { put, takeEvery } from 'redux-saga/effects';
import { SIGNIN } from './actions';
import { signinFailure, signinSuccess, signInSubmitting } from './actions';
import { auth } from '../../services/api'
import { SubmissionError } from '../../components/redux-form';

const UNKOWN_ERROR = 'Unknown error';
const AUTH_INVALID_EMAIL = 'Email is invalid';
const AUTH_USER_DISABLED = 'User is disabled';
const AUTH_USER_NOT_FOUND = 'User not found';
const AUTH_WRONG_PASSWORD = 'Password is wrong';

export function signIn({email, password}) {
  return auth.signInWithEmailAndPassword(email, password)
    .catch((error) => {
      if(!error) throw new Error(UNKOWN_ERROR)
      switch(error.code) {
        case 'auth/invalid-email':
          return new SubmissionError({
            email: SIGNIN_INVALID_EMAIL,
            _error: [SIGNIN_INVALID_EMAIL]
          });
        case 'auth/user-disabled':
          return new SubmissionError({
            _error: [AUTH_USER_DISABLED]
          });
        case 'auth/user-not-found':
          return new SubmissionError({
            _error: [AUTH_USER_NOT_FOUND]
          });
        case 'auth/wrong-password':
          return new SubmissionError({
            password: AUTH_WRONG_PASSWORD,
            _error: [AUTH_WRONG_PASSWORD]
          });
        default:
          return new Error(error.message || UNKOWN_ERROR);
      }
    });
}

function* signInFlow(action) {
  debugger;
  const { email, password } = action.payload;

  try {
    put(signInSubmitting(user));
    const user = yield call(signIn, {email, password});
    yield put(signInSuccess(user));
    return user;
  } catch(error) {
    yield put(signInFailure(error));
  }
}

function* watchSignIn() {
  yield takeLatest(SIGNIN, signinFlow);
};

// @TODO: can't directly export generator function due to react-native bug.
// refactor when fixed
export default watchSignIn;
