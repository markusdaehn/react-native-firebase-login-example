const USER_SET = 'yuzsa/user/set';
/**
 * @param {Object} user - The updated user
 * @param {string} user.auth.token - The access token
 * @param {string} user.uid - The user UID
 */
export function setUser(user) {
  return {
    type: USER_SET,
    payload: user,
  };
}

const USER_UNSET = 'yuzsa/user/unset';
export function unsetUser() {
  return {
    type: USER_UNSET,
  };
}
