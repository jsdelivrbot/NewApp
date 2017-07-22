export function selectUser(user) {
  return {
    type: 'USER_SELECTED',
    payload: user
  };
}

export function addUser(user) {
  return {
    type: 'USER_ADDED',
    payload: user
  };
}
