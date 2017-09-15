import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
import screens from '../screens/reducer';
import navigators from '../navigators/reducer';
import user from './user/reducer';

export default combineReducers({
  form,
  screens,
  navigators,
  user,
});
