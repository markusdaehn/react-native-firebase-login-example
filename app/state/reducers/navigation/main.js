import {MainDrawerNavigator} from '../../../navigators/MainDrawerNavigator';

export default function (state, action) {
  let newState = MainDrawerNavigator.router.getStateForAction(action, state);
  return newState || state;
}
