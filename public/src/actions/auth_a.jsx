import axios from 'axios';

/**** SIGNUP ACTIONS ****/
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export function requestSignup(creds) {
  return {
    type: SIGNUP_REQUEST,
    // isFetching: true,
    isAuthenticated: false,
    creds
  }
};

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export function receiveSignup(user) {
  return {
    type: SIGNUP_SUCCESS,
    isAuthenticated: true,
    id_token: user.id_token
  }
};

export const  SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export function signupError(message) {
  return {
    type: SIGNUP_FAILURE,
    isAuthenticated: false,
    message
  }
};

/**** SIGNUP API CALL ****/
//Calls the API go get a token and dispatches along the way
export function signupUser(creds) {
  let config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
    body: `username=${creds.username}&password=${creds.password}`
  };

  return dispatch => {
    dispatch(requestSignup(creds));

    //need to switch to axios call
    return fetch('/users', config)
      .then(res => res.json().then(user => ({user, res})))
      .then(({user, res}) => {
        if (!res.ok) {
          dispatch(signupError(user.message));
          return Promise.reject(user);
        } else {
          localStorage.setItem('id_token', user.id_token);
          localStorage.setItem('access_token', user.access_token);
          dispatch(receiveSignup(user));
        }})
      .catch(err => console.log('signup API public error', err))
  }
}


/**** LOGIN ACTIONS ****/
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isAuthenticated: false,
    creds
  }
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isAuthenticated: true,
    id_token: user.id_token
  }
};

export const  LOGIN_FAILURE = 'LOGIN_FAILURE';
export function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isAuthenticated: false,
    message
  }
};

/**** LOGIN API CALL ****/
//Calls the API go get a token and dispatches along the way
export function loginUser(creds) {
  let config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
    body: `username=${creds.username}&password=${creds.password}`
  };

  return dispatch => {
    dispatch(requestLogin(creds));

    //need to switch to axios call
    return fetch('/sessions/create', config)
      .then(res => res.json().then(user => ({user, res})))
      .then(({user, res}) => {
        if (!res.ok) {
          dispatch(loginError(user.message));
          return Promise.reject(user);
        } else {
          localStorage.setItem('id_token', user.id_token);
          localStorage.setItem('access_token', user.access_token);
          dispatch(receiveLogin(user));
        }})
      .catch(err => console.log('login API public error', err))
  }
}

/**** LOGOUT ACTIONS ****/
//remove token from localStorage
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isAuthenticated: true
  }
};

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isAuthenticated: false
  }
};

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');
    dispatch(receiveLogout());
  }
};