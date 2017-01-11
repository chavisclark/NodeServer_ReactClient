import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignUp extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form>        
        <fieldset className="form-group">
          <label>Email</label>
          <Field className='form-control' name="email" component="input" type="text" placeholder="Email"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <Field className='form-control' name="password" component="input" type="password" placeholder="Password"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password</label>
          <Field className='form-control' name="passwordConfirm" component="input" type="password" placeholder="Confirm Password"/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    )
  }
}

SignUp = reduxForm({
    form: 'SignUpForm'
})(SignUp);

export default SignUp;