const initialState = [
  { first_name: 'Joe', last_name: 'Brown' },
  { first_name: 'Dave', last_name: 'Dee' },
  { first_name: 'Jim', last_name: 'Jones' },
  { first_name: 'Arther', last_name: 'Askey' }
];


export default function (state = initialState, action) {
  switch (action.type) {
    case 'USER_ADDED':
    console.log('user added reducer');
    return state.concat(action.payload);
  }
  return state;
}
