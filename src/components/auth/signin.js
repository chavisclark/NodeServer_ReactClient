import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  
  handleFormSubmit({email, password}) {
    console.log(this.props)
    this.props.signinUser({email, password});
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
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <Field className='form-control' name="email" component="input" type="text" placeholder="Email"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <Field className='form-control' name="password" component="input" type="password" placeholder="Password"/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
        {this.renderAlert()}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {errorMessage: state.auth.error}
}

Signin = reduxForm({
  form: 'Signin'
})(Signin)

Signin = connect(mapStateToProps, actions)(Signin)

export default Signin;