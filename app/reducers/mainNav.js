import {NavigationActions} from 'react-navigation';
import {MainDrawerRouter} from '../routers/MainDrawerRouter';

const homeAction = MainDrawerRouter.router.getActionForPathAndParams('Home');
const initialState = MainDrawerRouter.router.getStateForAction(homeAction);

export default function (state = initialState, action) {
  let newState = MainDrawerRouter.router.getStateForAction(action, state);
  return newState || state;
}
