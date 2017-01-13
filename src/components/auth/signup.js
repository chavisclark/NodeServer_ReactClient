import React, {Component} from 'react';
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
  render() {
    const { handleSubmit, error } = this.props;
    console.log(this.props);

    return (
      <form>        
        <Field name="email" component={renderField} type="text" label="Email"/>
        <Field name="password" component={renderField} type="password" label="Password"/>
        <Field name="passwordConfirm" component={renderField} type="password" label="Confirm Password"/>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    )
  }
}


function validate(formProps) {
  const errors = {};
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match'
  }
  return errors;
}

SignUp = reduxForm({
    form: 'SignUpForm',
    validate
})(SignUp);

export default SignUp;