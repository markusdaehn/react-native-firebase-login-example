import {USER_SET, USER_UNSET} from './actions';

const initialState = Object.freeze({
  uid: null,
  email: null,
  auth: {
    isAuthenticated: false,
    token: null,
  },
});
export default function(state = initialState, action) {
  switch(action.type) {
    case USER_SET:
      return {
        ...state,
        ...action.payload,
        auth: {
          isAuthenticated: !!action.payload.token,
          token: action.payload.token,
        },
      };
    case USER_UNSET:
      return initialState;
    default:
      return state;
  }
}
