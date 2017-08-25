import {NavigationActions} from 'react-navigation';
import {MainDrawerNavigator} from '../../navigators/MainDrawerNavigator';

const homeAction = MainDrawerNavigator.router.getActionForPathAndParams('Home');
const initialState = MainDrawerNavigator.router.getStateForAction(homeAction);

export default function (state = initialState, action) {
  let newState = MainDrawerNavigator.router.getStateForAction(action, state);
  return newState || state;
}
