import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import faker from 'faker';
import { connect } from 'react-redux';
import { addUser } from '../actions/index';
import './add_user_form.css';

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = (firstName+lastName+'@hm.net').toLowerCase();
const password = faker.internet.password();

class AddUser extends Component {
  componentWillMount(){
    this.props.initialize({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    });
  }
  onSubmit(values, dispatch) {
    // dispatch comes from redux-form
    // reset is a prop added by redux-form
    const { reset } = this.props;
    reset();
    return dispatch(addUser(values));
  }

  renderField(field) {
    const className = `${field.meta.touched && field.meta.error ? 'hasErr' : ''}`;
    return (
      <div className={className}>
        <label htmlFor={field.name}>{field.label}</label>
        <input type={field.type} placeholder={firstName} {...field.input} />

        {field.meta.touched &&
        ((field.meta.error &&
          <span>
            <br />
            {field.meta.error}
          </span>))}
      </div>
    );
  }

  render() {
    // handleSubmit comes from redux-form
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <br />
        <div>
          <Field
            name="first_name"
            component={this.renderField}
            type="text"
            placeholder="First Name"
            label="First Name"
            wierd="Dorris"
          />
          <br />
          <Field
            name="last_name"
            component={this.renderField}
            type="text"
            placeholder="Last Name"
            label="Last Name"
            value="Dorris"
          />
          <br />
          <Field
            name="email"
            component={this.renderField}
            type="email"
            placeholder="email"
            label="email"
          />
          <br />
          <Field
            name="password"
            component={this.renderField}
            type="password"
            placeholder="password"
            label="password"
          />
        </div>
        <br />
        <button type="submit">Submit</button>

      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  //validation
  if (!values.first_name) {
    errors.first_name = 'Enter a First Name';
  }
  if (!values.last_name) {
    errors.last_name = 'Enter a Last Name';
  }
  if (!values.email) {
    errors.email = 'Enter an email';
  }
  if (!values.password) {
    errors.password = 'Enter a Password';
  }
  return errors;
}

export default reduxForm({
  // must provide a unique form name so can use more than one form on a page.
  form: 'UserNewForm',
  validate
})(
  connect(null, { addUser })(AddUser)
);
