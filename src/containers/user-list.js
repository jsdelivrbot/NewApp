import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectUser } from '../actions/index';


class UserList extends Component {

  renderList() {
    return this.props.users.map((user) => {
      return (
        <li
          style={{ color: 'blue', cursor: 'pointer' }}
          key={user.name}
          onClick={() => this.props.selectUser(user)}
        >
          {user.name}
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  // makes this function available as a prop
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
