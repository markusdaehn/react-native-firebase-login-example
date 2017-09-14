import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import scenes from '../scenes/reducer';
import navigators from '../navigators/reducer';

export default combineReducers({
  form: formReducer,
  scenes,
  navigators,
});
