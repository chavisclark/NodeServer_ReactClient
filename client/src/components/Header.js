import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      //Show a link to sign out
      return [
         <li key="2" className="nav-item nav-link">
            <Link to="/feature">Feature</Link>
        </li>,
        <li key="1" className="nav-item nav-link">
            <Link to="/signout">Sign Out</Link>
        </li>
      ]
    } else {
      //Show a link to sign in / sign up
      return [
         <li key="1" className="nav-item nav-link">
            <Link to="/signin">Sign In</Link>
        </li>,
         <li key="2" className="nav-item nav-link">
            <Link to="/signup">Sign Up</Link>
        </li>

      ]    
    }
  }
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navBarID" aria-controls="navBarID" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">Express & React</a>
        <div className="collapse navbar-collapse" id="navBarID">
          <div className="nav navbar-nav">
            
              {this.renderLinks()}

          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);