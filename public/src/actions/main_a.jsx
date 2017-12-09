import axios from 'axios';


export const REQUEST_RESULTS = 'REQUEST_RESULTS';
export function requestResults(searchQuery) {
  return { type: REQUEST_RESULTS, searchQuery }
}

export const RESULTS_RETURNED = 'RESULTS_RETURNED';
export function resultsReturned(searchResults) {
  return { type: RESULTS_RETURNED, searchResults }
}

export const SET_RESULTS_PAGE = 'SET_RESULTS_PAGE';
export function setResultsPage(resultsPage) {
  return { type: SET_RESULTS_PAGE, resultsPage }
}

export function submitSearch(searchQuery) {

  return function (dispatch) {
    dispatch(requestResults(searchQuery))

    return axios({
      method: 'get',
      url: `/api/search/${searchQuery}`,
      responseType: 'json'
    })
    .then(response => {
      console.log(response);
      const searchResults = response.data[0].item.map((result,index) => {
        result.page = Math.floor(index / 10);
        result.searchQuery = searchQuery;
        return result;
      });
      dispatch(setResultsPage(0));
      dispatch(resultsReturned(searchResults));
    })
  }
  //return { type: SUBMIT_SEARCH, searchQuery }
}


/**** SIGNUP ACTIONS ****/
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export function requestSignup(creds) {
  return {
    type: SIGNUP_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
};

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export function receiveSignup(user) {
  return {
    type: SIGNUP_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
};

export const  SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export function signupError(message) {
  return {
    type: SIGNUP_FAILURE,
    isFetching: false,
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
    return fetch('/sessions/create', config)
      .then(res => res.json().then(user => ({user, res})))
      .then(({user, res}) => {
        if (!res.ok) {
          dispatch(signupError(user.message));
          return Promise.reject(user);
        } else {
          localStorage.setItem('id_token', user.id_token);
          localStorage.setItem('id_token', user.access_token);
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
    isFetching: true,
    isAuthenticated: false,
    creds
  }
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
};

export const  LOGIN_FAILURE = 'LOGIN_FAILURE';
export function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
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
    return fetch('/sessions/create', config)
      .then(res => res.json().then(user => ({user, res})))
      .then(({user, res}) => {
        if (!res.ok) {
          dispatch(loginError(user.message));
          return Promise.reject(user);
        } else {
          localStorage.setItem('id_token', user.id_token);
          localStorage.setItem('id_token', user.access_token);
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
    isFetching: true,
    isAuthenticated: true
  }
};

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
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



export const ADD_NAME = 'ADD_NAME';
export function addName(name) {
  return { type: ADD_NAME, name }
}

