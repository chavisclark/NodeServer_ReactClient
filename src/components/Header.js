import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Header extends Component {
  renderLinks() {
    if(this.props.authenticated) {
      //Show a link to sign out
      return 
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
    } else {
      //Show a link to sign in / sign up
      return [
         <li key="1" className="nav-item">
            <Link to="/signin" className="nav-link">Sign In</Link>
        </li>,
         <li key="2" className="nav-item">
            <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>

      ]    
    }
  }
  render() {
    return (
      <nav className="navbar navbar-light">
        <Link className="navbar-brand">NSRC</Link>
        <ul className="nav navbar-nav">
          
            {this.renderLinks()}

        </ul>
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