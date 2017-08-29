import {NavigationActions} from 'react-navigation';
import {RootStackNavigator} from './index';

export default function rootNav(state, action) {
  let newState;

  switch(action.type) {
    case 'Login':
      newState = RootStackNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      newState = RootStackNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({routeName: 'Home'})
          ]
        }),
        state
      );

      break;
    default:
      newState = RootStackNavigator.router.getStateForAction(action, state);
      break;
  }

  return newState || state;
}
