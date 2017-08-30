import type { Action } from '../actions/types';

export type State = {
  list: string
};

const initialState = {
  list: [
    'React Native Starter Kit',
    'React Navigation',
    'NativeBase Easy Grid',
    'NativeBase',
    'CodePush',
    'Redux',
  ],
};

export default function(state: State = initialState, action: Action): State {
  return state;
}
