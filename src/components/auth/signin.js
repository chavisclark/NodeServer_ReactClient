import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  
  handleFormSubmit({email, password}) {
    console.log(this.props)
    this.props.signinUser({email, password});
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

Signin = reduxForm({
  form: 'Signin'
})(Signin)

Signin = connect(null, actions)(Signin)

export default Signin;