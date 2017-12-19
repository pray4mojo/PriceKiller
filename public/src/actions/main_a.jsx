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

export const SET_USER_STATE = 'SET_USER_STATE';
export function setUserState(user) {
  console.log('USER BEING SET!')
  return { type: SET_USER_STATE, user }
}

export const USER_LOGOUT = 'USER_LOGOUT';
export function userLogout() {
  return { type: USER_LOGOUT }
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
}


export const ADD_NAME = 'ADD_NAME';
export function addName(name) {
  return { type: ADD_NAME, name }
}

