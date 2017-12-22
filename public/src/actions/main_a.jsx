import axios from 'axios';

export const REQUEST_RESULTS = 'REQUEST_RESULTS';
export function requestResults(searchQuery) {
  return { type: REQUEST_RESULTS, searchQuery }
}

export const RESULTS_RETURNED = 'RESULTS_RETURNED';
export function resultsReturned(searchResults) {
  return { type: RESULTS_RETURNED, searchResults }
}

export const APPEND_RESULTS = 'APPEND_RESULTS';
export function appendResults(newSearchResults) {
  return { type: APPEND_RESULTS, newSearchResults }
}

export const SET_INITIAL_PAGE = 'SET_INITIAL_PAGE';
export function setInitialPage() {
  return { type: SET_INITIAL_PAGE };
}

export const SET_RESULTS_PAGE = 'SET_RESULTS_PAGE';
export function setResultsPage(resultsPage, searchResults) {
  if (resultsPage > 0 && searchResults.maxPage - searchResults.resultsPage <= 1 && (searchResults.maxPage + 1) % 10 === 0) {
    return function (dispatch) {
      dispatch(requestResults(searchResults.searchQuery));
      return axios({
        method: 'get',
        url: `/api/nextPage/${searchResults.searchQuery}/${searchResults.maxPage + 1}`,
        responseType: 'json'
      })
      .then(response => {
        let maxPage = searchResults.maxPage + 1;
        const newSearchResults = response.data[0].item.map((result, index) => {
          result.page = Math.floor(index / 10) + searchResults.maxPage + 1;
          result.searchQuery = searchQuery;
          if (result.page > maxPage) {
            maxPage = result.page;
          }
          return result;
        });
        dispatch(appendResults(newSearchResults));
        dispatch(setMaxPage(maxPage));
        return { type: SET_RESULTS_PAGE, resultsPage }
      });
    }
  } else {
    return { type: SET_RESULTS_PAGE, resultsPage }
  }
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
    dispatch(requestResults(searchQuery));

    return axios({
      method: 'get',
      url: `/api/search/${searchQuery}`,
      responseType: 'json'
    })
    .then(response => {
      let maxPage = 0;
      const searchResults = response.data[0].item.map((result, index) => {
        result.page = Math.floor(index / 10);
        result.searchQuery = searchQuery;
        if (result.page > maxPage) {
          maxPage = result.page;
        }
        return result;
      });
      dispatch(setInitialPage());
      dispatch(resultsReturned(searchResults));
      dispatch(setMaxPage(maxPage));
    })
  }
}

export const SET_MAX_PAGE = 'SET_MAX_PAGE';
export function setMaxPage(maxPage) {
  console.log()
  return { type: SET_MAX_PAGE, maxPage }
}

export function findMoreResults() {
  return function (dispatch) {
    dispatch(requestResults(searchQuery));

    return axios({
      method: 'get',
      url: `/api/nextPage/${searchQuery}`,
      responseType: 'json'
    })
    .then(response => {

    })
  }
}

