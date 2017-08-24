import {NavigationActions} from 'react-navigation';
import {RootStackRouter} from '../routers/RootStackRouter';


const mainAction = RootStackRouter.router.getActionForPathAndParams('Main');
const initialState = RootStackRouter.router.getStateForAction(mainAction);

export default function rootNav(state = initialState, action) {
  let newState;

  switch(action.type) {
    case 'Login':
      newState = RootStackRouter.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      newState = RootStackRouter.router.getStateForAction(
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
      newState = RootStackRouter.router.getStateForAction(action, state);
      break;
  }

  return newState || state;
}
