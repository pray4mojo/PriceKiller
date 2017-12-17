import React, { Component, PropTypes} from 'react';
import App from './App.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Logout from './Logout.jsx';
import Search from './Search.jsx';
import Favorites from './Favorites.jsx'

import { Route, Link } from 'react-router-dom';

class Navbar extends Component {

  componentDidMount() {}

  activateBurger(e) {
    $('.navbar-menu').toggleClass('is-active')
  }

  onLogoutClick() {
    this.props.logoutUser();
    console.log('logout');
  }

  render() {
    // console.log('props in navbar.jsx', this.props);
    return(<div>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://s3-us-west-1.amazonaws.com/hackreactor27/pricekiller_logov1.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
          </a>
          <button
            className="button navbar-burger"
            data-target="navbarExampleTransparentExample"
            onClick={(e) => {this.activateBurger(e)}}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <div>
              <ul>
                <li><Link to="/signout">Signout</Link></li>
              </ul>


            </div>


            <a className="navbar-item" href="/">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="">
                Navigation
              </a>
              <div className="navbar-dropdown is-boxed">
                <Link className="navbar-item" to="/search">
                  Search
                </Link>
                <Link className="navbar-item" to="/favorites">
                  Favorites
                </Link>
                <Link className="navbar-item" to="/chart">
                  Chart
                </Link>
                <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Getting Started
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Who We Are
                </a>
                <hr className="navbar-divider"/>
                <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Preferences
                </a>



              </div>
            </div>
          </div>
        </div>
      </nav>

      <hr/>


    </div>)
  }
}


// Navbar.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool.isRequired,
//   errorMessage: PropTypes.string
// }
/*
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <a className="navbar-band" href="#">Price Killer</a>
              <div className="navbar-form">
                {!isAuthenticated && <Login errorMessage={errorMessage} onLoginClick={creds => dispatch(loginUser(creds))} onGoogleLoginClick={creds => dispatch(login(creds))}/>}
                {!isAuthenticated && <Signup errorMessage={errorMessage} onSignupClick={creds => dispatch(signupUser(creds))} />}
                {isAuthenticated && <Logout onLogoutClick={() => dispatch(logoutUser())}/>}
              </div>
            </div>
          </nav>
*/
export default Navbar;