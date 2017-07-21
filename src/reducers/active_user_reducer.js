// all reducers get two arguments: reducer's bit of state + action
export default function (state = null, action) {
  switch (action.type) {
    case 'USER_SELECTED':
    return action.payload;
  }
  return state;
}
