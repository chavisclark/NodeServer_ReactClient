import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


class SignUp extends Component {
  render() {
    const { handleSubmit, error } = this.props;
    console.log(this.props);

    return (
      <form>        
        <fieldset className="form-group">
          <Field className='form-control' name="email" component={renderField} type="text" label="Email"/>
        </fieldset>
        <fieldset className="form-group">
          <Field className='form-control' name="password" component={renderField} type="password" label="Password"/>
        </fieldset>
        <fieldset className="form-group">
          <Field className='form-control' name="passwordConfirm" component={renderField} type="password" label="Confirm Password"/>
        </fieldset>
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