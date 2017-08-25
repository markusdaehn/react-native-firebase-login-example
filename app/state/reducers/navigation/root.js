import {NavigationActions} from 'react-navigation';
import {RootStackNavigator} from '../../../navigators/RootStackNavigator';


const mainAction = RootStackNavigator.router.getActionForPathAndParams('Main');
const initialState = RootStackNavigator.router.getStateForAction(mainAction);

export default function rootNav(state = initialState, action) {
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
