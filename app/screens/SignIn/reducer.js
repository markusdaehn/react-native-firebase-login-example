import { SIGNIN_SUBMITTING, SIGNIN_SUCCESS, SIGNIN_FAILURE } from './actions';

const initialState = {
  submitting: false,
  success: false,
  error: null,
}

export default function signIn(state = initialState, action) {
  switch(action.type) {
    case SIGNIN_SUBMITTING:
      return {
        ...state,
        submitting: true,
        success: false,
        error: null,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        submitting: false,
        success: true,
        error: null,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        submitting: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
