import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveUserComponent extends Component {
  render() {
    if (!this.props.activeUser) {
      return <div>Select a User</div>;
    }
    return (
      <p>{this.props.activeUser.name+': '+this.props.activeUser.age}</p>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    activeUser: state.user
  }
  );
};

export default connect(mapStateToProps)(ActiveUserComponent);
