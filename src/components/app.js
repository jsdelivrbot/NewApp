import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UserList from '../containers/user-list';
import ActiveUserComponent from '../containers/active-user-component';
import AddUser from '../forms/add_user_form';
import { fetchUsers } from '../actions/index';

class App extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        <h1>My App</h1>
        <UserList />
        <ActiveUserComponent />
        <AddUser />
      </div>
    );
  }

}

// function mapStateToProps(state) {
//   return {
//     users: state.users
//   };
// }

function mapDispatchToProps(dispatch) {
  // makes this function available as a prop
  return bindActionCreators({ fetchUsers: fetchUsers }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
