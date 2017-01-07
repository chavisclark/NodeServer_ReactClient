import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Signin extends Component {
  
  handleFormSubmit({email, password}) {
    console.log(email, password)
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <div>
            <label>Email</label>
            <div>
              <Field className='form-control' name="email" component="input" type="text" placeholder="Email"/>
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <Field className='form-control' name="password" component="input" type="text" placeholder="Password"/>
            </div>
          </div>
          <button action="submit" className="btn btn-primary">Sign in</button>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'SigninForm'
})(Signin);