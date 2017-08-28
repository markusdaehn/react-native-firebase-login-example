import {StoreFrontStackNavigator} from '../../../navigators/StoreFrontStackNavigator';

export default function(state, action) {
  let newState = StoreFrontStackNavigator.router.getStateForAction(action, state);
  return newState || state;
}
