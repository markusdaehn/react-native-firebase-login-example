import { auth } from '../../api'
import { SubmissionError } from '../../components/redux-form';

export default function submit(values, dispatch, props) {
  const { email, password } = values;
  const _error =  'Failed to create account';

  return auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      props.gotoHome();
    })
    .catch((error) => {
      if(!error) throw new Error('Unknown error.')
      switch(error.code) {
        case 'auth/email-already-in-use':
          throw new SubmissionError({
            email: 'Email is taken',
            _error
          });
        case 'auth/invalid-email':
          throw new SubmissionError({
            email: 'Email is invalid',
            _error
          });
        case 'auth/operation-not-allowed':
          throw new SubmissionError({
            _error: 'Email login not enabled'
          });
        case 'auth/weak-password':
          throw new SubmissionError({
            password: 'Password is too weak',
            _error
          });
        default:
          throw new Error(error.message || 'Unknown error.');
      }
    });
}
