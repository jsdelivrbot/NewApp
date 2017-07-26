import firebase from 'firebase';
// import axios from 'axios';

const config = {
  apiKey: 'AIzaSyB_VkNQ9rlwKUg0RwC5EirnT6RJE1_WfOs',
  authDomain: 'userlist-1112f.firebaseapp.com',
  databaseURL: 'https://userlist-1112f.firebaseio.com',
  storageBucket: 'userlist-1112f.appspot.com',
};

firebase.initializeApp(config);

const Users = firebase.database().ref().child('users');
//
// export function fetchUsers() {
//   Posts.on('value', );
//
//   return (dispatch) => {
//     request.then((data))
//   }
// }

export function fetchUsers() {
  console.log('fetchUsers');

  return dispatch => {
    Users.on('child_added', snapshot => {
      console.log(snapshot.val());
      console.log(snapshot.key);
      dispatch({
        type: 'FETCH_USERS',
        payload: snapshot.val()
      });
    });
  };
}

export function selectUser(user) {
  return {
    type: 'USER_SELECTED',
    payload: user
  };
}

export function addUser(user) {
  return dispatch => {
    const theKey = Users.push(user).key;
    console.log(theKey);
    // Users.set({ id: theKey });
  };
}

export function deleteUser(key) {
  return dispatch => Users.child(key).remove();
}
