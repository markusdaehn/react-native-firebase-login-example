import { combineReducers } from 'redux';
import main from './main';
import root from './root';
import storefront from './storefront';

export default combineReducers({main, root, storefront});
