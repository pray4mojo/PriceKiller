import React, { Component, PropTypes} from 'react';
import App from './App.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Logout from './Logout.jsx';
import Search from './Search.jsx';
import Favorites from './Favorites.jsx';
import Auth0 from "auth0-lock";
import Auth from "../../../Auth/Auth.js";
import axios from 'axios';
import Redirect from 'react-router-dom';
const Lock = require('../../../Auth/Auth.js').lock;

import { Route, Link } from 'react-router-dom';
const auth = new Auth;

class Navbar extends Component {

  // componentWillMount() {
  //   if (auth.isAuthenticated()) {
  //     let localProfile = JSON.parse(localStorage.getItem('profile'));
  //     let user = {};
  //     user.username = localProfile.nickname;
  //     user.googleId = localProfile.email;
  //     console.log('user-->', user);
  //   }
  // }
  // kickout() {
  //   if (!auth.isAuthenticated()) {
  //     console.log('kicked out');
  //     // debugger;
  //     return <Redirect to="/" />;
  //   }
  // }

  componentDidMount() {
    auth.handleAuthentication();
    Lock.on('authenticated', function(authResult) {
      console.log('Result of authentication', authResult);

      if (!authResult.accessToken) return;

      Lock.getUserInfo(authResult.accessToken, function(error, profile) {
        console.log("error", error, "profile", profile);

        axios.post('http://localhost:1111/api/auth/signup', profile)
          .then(function(success) {
           console.log("user data", success);
          window.location.reload();
       })
       .catch(function(error) {
         console.log(error);
       })
      });

    });

    Lock.on('authorization_error', function(error) {
      console.log('authorization_error', error);
    });

    if (auth.isAuthenticated()) {
      let localProfile = JSON.parse(localStorage.getItem('profile'));
      let user = {};
      user.username = localProfile.nickname;
      user.googleId = localProfile.email;
      console.log('user-->', user);
    } else {
      Lock.show();
    }
  }

  activateMenu(e) {
    $('.navbar-menu').toggleClass('is-active')
  }

  onLogoutClick() {
    this.props.logoutUser();
    console.log('logout');
  }


 // <li><Link to="/signout">{<button onClick={() => {(function(){auth.logout(); window.location.reload(); self.kickout()})}}>Signout</button>}</Link></li>


  render() {
    // console.log('props in navbar.jsx', this.props);
    let self = this;
    return(<div>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://s3-us-west-1.amazonaws.com/hackreactor27/pricekiller_logov1.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
          </a>
          <button
            className="button navbar-burger"
            data-target="navbarExampleTransparentExample"
            onClick={(e) => {this.activateMenu(e)}}
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
                <li><button onClick={() => {auth.logout(); window.location.reload(); self.kickout()}}>Signout</button></li>
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
                <Link
                  className="navbar-item"
                  to="/search"
                  onClick={(e) => {this.activateMenu(e)}}
                >
                  Search
                </Link>
                <Link
                  className="navbar-item"
                  to="/favorites"
                  onClick={(e) => {this.activateMenu(e)}}
                >
                  Favorites
                </Link>
                <Link
                  className="navbar-item"
                  to="/chart"
                  onClick={(e) => {this.activateMenu(e)}}
                >
                  Chart
                </Link>
                <a
                  className="navbar-item"
                  href=""
                  onClick={(e) => {this.activateMenu(e)}}
                >
                  Getting Started
                </a>
                <a
                  className="navbar-item"
                  href=""
                  onClick={(e) => {this.activateMenu(e)}}
                >
                  Who We Are
                </a>
                <hr className="navbar-divider"/>
                <a
                  className="navbar-item"
                  href=""
                  onClick={(e) => {this.activateMenu(e)}}
                >
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