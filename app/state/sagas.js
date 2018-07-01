import signIn from '../screens/SignIn/sagas';
import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    signIn
  ]);
}

// @TODO: can't directly export generator function due to react-native bug.
// refactor when fixed
export default rootSaga;
