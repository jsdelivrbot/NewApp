import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveUserComponent extends Component {
  render() {
    return (
      <p>{this.props.activeUser.name}</p>
    );
  }
}

function mapStateToProps(state) {
  return ({
    activeUser: state.user
  }
  );
}

export default connect(mapStateToProps)(ActiveUserComponent);
