import {combineReducers} from 'redux';
import main from './MainDrawerNavigator/reducer';
import root from './RootStackNavigator/reducer';

export default combineReducers({main, root});
