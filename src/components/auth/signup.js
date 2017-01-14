import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <fieldset className="form-group">
    <label>{label}</label>
      <input {...input} className='form-control' placeholder={label} type={type}/>
      {touched && error && <span className="error">{error}</span>}
  </fieldset>
)

class SignUp extends Component {
  handleFormSubmit(formProps) {
      //Call action to submit user info
      this.props.signupUser(formProps)
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>        
        <Field name="email" component={renderField} type="text" label="Email"/>
        <Field name="password" component={renderField} type="password" label="Password"/>
        <Field name="passwordConfirm" component={renderField} type="password" label="Confirm Password"/>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    )
  }
}


function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }
  if (!formProps.password) {
    errors.password = 'Please enter an password';
  }
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }
  return errors;
}

function mapStateToProps(state) {
  return {errorMessage: state.auth.error}
}

SignUp = reduxForm({
    form: 'SignUpForm',
    validate
})(SignUp);

SignUp = connect(mapStateToProps, actions)(SignUp)

export default SignUp;




