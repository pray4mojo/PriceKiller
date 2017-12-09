import axios from 'axios';


export const REQUEST_RESULTS = 'REQUEST_RESULTS';
export function requestResults(searchQuery) {
  return { type: REQUEST_RESULTS, searchQuery }
}

export const RESULTS_RETURNED = 'RESULTS_RETURNED';
export function resultsReturned(searchResults) {
  return { type: RESULTS_RETURNED, searchResults }
}

export const SUBMIT_SEARCH = 'SUBMIT_SEARCH';
export function submitSearch(searchQuery) {

  return function (dispatch) {
    dispatch(requestResults(searchQuery))

    return axios({
      method: 'get',
      url: `/api/search/${searchQuery}`,
      responseType: 'json'
    })
    .then(response => {
      console.log('dispatching results...');
      const searchResults = response.data[0].item.map(result => result.title);
      dispatch(resultsReturned(response.data[0].item));
    })
  }
  //return { type: SUBMIT_SEARCH, searchQuery }
}

export const ADD_NAME = 'ADD_NAME';
export function addName(name) {
  return { type: ADD_NAME, name }
}