import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../actions/index';

class AddUser extends Component {
  newUser() {
    const newName = document.getElementById('name_input').value;
    const newAge = document.getElementById('age_input').value;
    return { name: newName, age: newAge };
  }

  render() {
    return (
      <div>
        <br />
        <h3>Add a New User</h3>
        <input type='text' id="name_input" placeholder="name" />
        <input type='text' id="age_input" placeholder="age" />
        <button onClick={() => this.props.addUser(this.newUser())}>Add</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addUser: addUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
