import {Action} from './types';

const LOGOUT = 'LOGOUT';
const LOGIN = 'LOGIN';

export function logout():Action {
  return {
    type: LOGOUT
  };
}

export function login():Action {
  return {
    type: LOGIN
  };
}
