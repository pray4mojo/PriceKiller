import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { setUserState, userLogout } from '../actions/main_a.jsx';
import { setFavorites } from '../actions/favorites_a';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Logout from './Logout.jsx';
import Search from './Search.jsx';
import Favorites from './Favorites';
import Notifications from './Notifications.jsx';
import Sidebar from './Sidebar.jsx';
import Auth0 from "auth0-lock";
import Auth from "../../../Auth/Auth.js";
import axios from 'axios';
import Redirect from 'react-router-dom';
const Lock = require('../../../Auth/Auth.js').lock;

import { Route, Link } from 'react-router-dom';
const auth = new Auth;

const mapStateToProps = (state) => {
  return {
    userProfile: state.userProfile,
    favorites: state.favorites.favorites,
    auth: auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserState: (user) => {
      dispatch(setUserState(user))
    },
    userLogout: () => {
      dispatch(userLogout())
    },
    setFavorites: (favorites) => {
      dispatch(setFavorites(favorites))
    }
  }
}

class Navbar extends Component {

  componentWillMount() {
    if (auth.isAuthenticated()) {
      let localProfile = JSON.parse(localStorage.getItem('profile'));
    } else {
      Lock.show();
    }
  }

  componentDidMount() {
    let self = this;
    auth.handleAuthentication();
    Lock.on('authenticated', function(authResult) {

      if (!authResult.accessToken) return;

      Lock.getUserInfo(authResult.accessToken, function(error, profile) {
        let user = {};
        user.username = profile.nickname;
        user.email = profile.email;
        user.picture = profile.picture;

        axios.post('/api/auth/signup', user)
          .then(function(res) {
          console.log(res, 'INSIDE LOCK GET USER INFO')
          self.props.setUserState(res.data);
          self.props.setFavorites(res.data.favorites);
          // window.location.reload();
       })
        .catch(function(error) {
          console.log(error);
        })
      });

    });

    Lock.on('authorization_error', function(error) {
      console.log('authorization_error', error);
    });
  }

  activateModal(e) {
    console.log('fire');
    $('.modal').addClass('is-active')
  }

  activateMenu(e) {
    $('.navbar-menu').toggleClass('is-active')
  }


  render() {
    let self = this;
    let profilePhoto = localStorage.profile ? <img className="image is-128x128" src={JSON.parse(localStorage.profile).picture} /> : null;
    return(
      <div>
        <div>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="pricekiller.herokuapp.com">
              <img src="https://s3-us-west-1.amazonaws.com/hackreactor27/pricekiller_logov1.png" alt="Pricekiller, kill your prices" width="112" height="28"/>
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
              <a className="navbar-item" href="/">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link
                  className="navbar-link"
                  to="/"
                  onClick={(e) => {this.activateMenu(e)}}
                >
                  Navigation
                </Link>
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
                  <Link
                    className="navbar-item"
                    to="/"
                    onClick={(e) => {this.activateMenu(e)}}
                  >
                    Getting Started
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/"
                    onClick={(e) => {this.activateMenu(e)}}
                  >
                    Who We Are
                  </Link>
                  <hr className="navbar-divider"/>
                  <a
                    className="navbar-item"
                    href=""
                    onClick={(e) => {this.activateModal(e)}}
                  >
                    Notifications
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </nav>
        <hr/>
      </div>
      <Notifications/>
      <Sidebar
        sidebar={this.props}
      />
    </div>
    )
  }
}

Navbar = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default Navbar;
