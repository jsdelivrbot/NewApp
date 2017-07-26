import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveUserComponent extends Component {
  render() {
    if (!this.props.activeUser) {
      return <div>Select a User</div>;
    }
    return (
      <div>
        <p>{this.props.activeUser.first_name}</p>
          <p>{this.props.activeUser.last_name}</p>
          <p>{this.props.activeUser.email}</p>
          <p>{this.props.activeUser.password}</p>
      </div>

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
