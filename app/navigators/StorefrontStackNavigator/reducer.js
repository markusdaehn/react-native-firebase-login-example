import {StorefrontStackNavigator} from './index';

export default function(state, action) {
  let newState = StorefrontStackNavigator.router.getStateForAction(action, state);
  return newState || state;
}
