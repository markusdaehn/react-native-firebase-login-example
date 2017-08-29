import {combineReducers} from 'redux';
import main from './MainDrawerNavigator/reducer';
import root from './RootStackNavigator/reducer';
import storefront from './StoreFrontStackNavigator/reducer';

export default combineReducers({main, root, storefront});
