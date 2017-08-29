import {MainDrawerNavigator} from './index';

export default function (state, action) {
  let newState = MainDrawerNavigator.router.getStateForAction(action, state);
  return newState || state;
}
