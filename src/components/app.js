import React from 'react';
import UserList from '../containers/user-list';
import ActiveUserComponent from '../containers/active-user-component';
import AddUser from '../forms/add_user_form';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <UserList />
      <ActiveUserComponent />
      <AddUser />
    </div>
  );
}

export default App;
