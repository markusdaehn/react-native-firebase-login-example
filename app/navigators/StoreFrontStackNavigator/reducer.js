import {StoreFrontStackNavigator} from './index';

export default function(state, action) {
  let newState = StoreFrontStackNavigator.router.getStateForAction(action, state);
  return newState || state;
}
