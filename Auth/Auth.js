import auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock';
import history from './history.js';
import { AUTH_CONFIG } from './Auth0-variables.js';
import axios from 'axios';

const lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, AUTH_CONFIG.options);

export default class Auth {
  constructor() {
    // this.handleAuthentication();
    // binds functions to keep this context

    // this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    // this.setSession = this.setSession.bind(this);
  }

  // login(email, password, callback) {
  //   lock.show();
  // }

  handleAuthentication() {
    let authenticatedUser = '';
    return new Promise((resolve, reject) => {
      lock.on('authorization_error', (err) => {
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
        history.replace('/login');
      });
      lock.on('authenticated', (authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
           return lock.getUserInfo(authResult.accessToken, function(err, profile) {
             if (err) {
               console.log(err);
             }
             localStorage.setItem('accessToken', authResult.accessToken);
             localStorage.setItem('profile', JSON.stringify(profile));
             localStorage.setItem('idToken', authResult.idToken);
             // navigate to the home route
              let user = {};
              user.username = profile.nickname;
              user.email = profile.email;
              user.picture = profile.picture;

              axios.post('/api/auth/signup', user)
                .then(function(res) {
                authenticatedUser = res;
                resolve(authenticatedUser);
                // window.location.reload();
              })
              .catch(function(error) {
                reject(error);
              })
           });
         }
      })
    })
  }

  // setSession(authResult) {
  //   console.log('INSIDE SET SESSION =====>', authResult);

  // }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('profile');
    // navigate to the home route
    history.push('/loggedout');
  }

  isAuthenticated() {
    // this.logout();
     // Check whether the current time is past the
     // access token's expiry time
     // Clear access token and ID token from local storage
     return (!!localStorage.getItem('accessToken') && !!localStorage.getItem('idToken') && !!localStorage.getItem('profile'));
  }
}

module.exports.lock = lock;