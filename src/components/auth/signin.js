import React, { Component } from 'react';
import reduxForm from 'redux-form';

class Signin extends Component {
  render() {
    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" />
          <label>Password:</label>
          <input className="form-control" />
          <button action="submit" className="btn btn-primary">Sign in</button>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm{
  form: 'SigninForm',
  fields: ['email', 'password']
})(Signin);