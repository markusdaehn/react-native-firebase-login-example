import { auth } from '../../services/api'
import { SubmissionError } from '../../components/redux-form';

const UNKOWN_ERROR = 'Unknown error';
const AUTH_INVALID_EMAIL = 'Email is invalid';
const AUTH_USER_DISABLED = 'User is disabled';
const AUTH_USER_NOT_FOUND = 'User not found';
const AUTH_WRONG_PASSWORD = 'Password is wrong';

export default function submit(values, dispatch, props) {
  const { email, password } = values;

  return auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      props.gotoHome();
    })
    .catch((error) => {
      if(!error) throw new Error(UNKOWN_ERROR)
      switch(error.code) {
        case 'auth/invalid-email':
          throw new SubmissionError({
            email: SIGNIN_INVALID_EMAIL,
            _error: [SIGNIN_INVALID_EMAIL]
          });
        case 'auth/user-disabled':
          throw new SubmissionError({
            _error: [AUTH_USER_DISABLED]
          });
        case 'auth/user-not-found':
          throw new SubmissionError({
            _error: [AUTH_USER_NOT_FOUND]
          });
        case 'auth/wrong-password':
          throw new SubmissionError({
            password: AUTH_WRONG_PASSWORD,
            _error: [AUTH_WRONG_PASSWORD]
          });
        default:
          throw new Error(error.message || UNKOWN_ERROR);
      }
    });
}
