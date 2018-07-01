import { RootStackNavigator } from './RootStackNavigator';
import { NavigationActions } from 'react-navigation';
import { SIGNIN_SUCCESS } from '../screens/SignIn/actions';

export default function root(state, action) {
  let newState;

  switch(action.type) {
    case SIGNIN_SUCCESS:
      newState = RootStackNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    // case 'Logout':
    //   newState = RootStackNavigator.router.getStateForAction(
    //     NavigationActions.reset({
    //       index: 0,
    //       actions: [
    //         NavigationActions.navigate({routeName: 'Home'})
    //       ]
    //     }),
    //     state
    //   );
    //
    //   break;
    default:
      newState = RootStackNavigator.router.getStateForAction(action, state);
      break;
  }

  return newState || state;
}

// export default function root(state, action) {
//   const newState = RootStackNavigator.router.getStateForAction(action, state);
//
//   return newState || state;
// }
