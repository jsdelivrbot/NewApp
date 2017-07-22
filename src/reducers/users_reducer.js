const initialState = [
  { name: 'Joe Brown', age: 23 },
  { name: 'Sam Smith', age: 42 },
  { name: 'Peter Potts', age: 33 },
  { name: 'Flo Blow', age: 21 }
];


export default function (state = initialState, action) {
  switch (action.type) {
    case 'USER_ADDED':
    return state.concat(action.payload);
  }
  return state;
}
