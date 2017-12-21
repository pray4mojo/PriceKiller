import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { setUserState, userLogout } from '../actions/main_a.jsx';
import { setFavorites } from '../actions/favorites_a';

import App from './App.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Logout from './Logout.jsx';
import Search from './Search.jsx';
import Favorites from './Favorites';
import Notifications from './Notifications.jsx';
import Auth0 from "auth0-lock";
import Auth from "../../../Auth/Auth.js";
import axios from 'axios';
import Redirect from 'react-router-dom';
const Lock = require('../../../Auth/Auth.js').lock;

import { Route, Link } from 'react-router-dom';
const auth = new Auth;

const mapStateToProps = (state) => {
 return {userProfile: state.userProfile};
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

const sideStyle = {
    // height: '100%', /* 100% Full-height */
    width: 0, /* 0 width - change this with JavaScript */
    position: 'fixed', /* Stay in place */
    zIndex: 1, /* Stay on top */
    top: 0, /* Stay at the top */
    left: 0,
    backgroundColor: 'hsl(204, 86%, 53%)',
    overflowX: 'hidden', /* Disable horizontal scroll */
    paddingTop: '60px', /* Place content 60px from the top */
    transition: '0.5s', /* 0.5 second transition effect to slide in the sidenav */
    opacity: 1,
    padding: '5px',
    borderWidth: '2px',
    borderColor: 'hsl(204, 86%, 53%)'
};

const closebtnStyle ={
  position: 'absolute',
  top: 0,
  right: '25px',
  fontSize: '36px',
  marginLeft: '50px'
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

  openNav() {
    console.log('inside')
    document.getElementById("sidenav").style.width = "250px";
    // $('#sidenav').toggleClass('is-active')
    // if($("#sidenav").css("left") == "0px"){
    //   console.log('inside!')
    //   $("#sidenav").animate({"left": "0px"},"fast");
    // } else {
    //   $("#sidenav").animate({"left": "75px"},"fast");
    // }
  }

  closeNav() {
    document.getElementById('sidenav').style.width = '0';
  }

  render() {
    let self = this;
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
                <ul>
                  <li><button onClick={() => {auth.logout(); window.location.reload();}}>Signout</button></li>
                </ul>
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

      <aside id="sidenav" className="column is-1 is-narrow-mobile section" style={sideStyle}>
        <a href="javascript:void(0)" className="closebtn" style={closebtnStyle} onClick={() => this.closeNav()}>&times;</a>
        <p className="menu-label is-hidden-touch">Navigation</p>
        <ul className="menu-list">
          <li>
            <a href="#" className="">
            <img className="image is-128x128" src={JSON.parse(localStorage.profile).picture} />
            </a>
          </li>
          <li>
            <a href="#" className="">
            <span className="icon"><i className="fa fa-table"></i></span> Links
            </a>
          </li>
          <li>
            <a href="#" className="">
            <span className="icon"><i className="fa fa-info"></i></span> About
             </a>
          </li>
        </ul>
       </aside>
       <a className ="button is-info" onClick={() => this.openNav()}><i className="fa fa-circle-o-notch" aria-hidden="true"></i></a>

    </div>
    )
  }
}

Navbar = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default Navbar;