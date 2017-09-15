import {combineReducers} from 'redux';
import home from './Home/reducer';
import signIn from './SignIn/reducer';

export default combineReducers({
  home,
  signIn,
});
