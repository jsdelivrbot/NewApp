import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveUserComponent extends Component {
  render() {
    return (
      <p>{this.props.activeUser.name}</p>
    );
  }
}

function mstp(state) {
  return ({
    activeUser: state.user
  }
  );
}

export default connect(mstp)(ActiveUserComponent);
