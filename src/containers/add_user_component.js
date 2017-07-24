import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddUser extends Component {
  onSubmit(values) {
    // reset is a prop added by redux-form
    const { reset } = this.props;
    console.log(values);
    reset();
  }

  renderField(field) {
    return (
      <div>
        <label htmlFor={field.name}>{field.label}</label>
        <input type={field.type} {...field.input} />

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
          />
          <br />
          <Field
            name="last_name"
            component={this.renderField}
            type="text"
            placeholder="Last Name"
            label="Last Name"
          />
          <br />
          {/* <Field
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
          /> */}
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
})(AddUser);
