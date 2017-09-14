import signIn from '../scenes/SignIn/saga';
import {all} from 'redux-saga/effects';

const rootSaga = function* rootSaga(){
  yield all([
    signIn
  ]);
}

// @TODO: can't directly export generator function due to react-native bug.
// refactor when fixed
export default rootSaga;
