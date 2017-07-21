import React from 'react';
import UserList from '../containers/user-list';
import ActiveUserComponent from '../containers/active-user-component';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <UserList />
      <ActiveUserComponent />

    </div>
  );
}

export default App;
