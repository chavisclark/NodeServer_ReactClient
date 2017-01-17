import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Header extends Component {
  renderLinks() {
    if(this.props.authenticated) {
      //Show a link to sign out
      return [
        <li key="1" className="nav-item nav-link">
            <Link to="/signout">Sign Out</Link>
        </li>,
         <li key="2" className="nav-item nav-link">
            <Link to="/feature">Feature</Link>
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
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
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