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
      url: 'http://svcs.ebay.com/services/search/FindingService/v1',
      'service-version': '1.13.0',
      'security-appname': 'BrianBin-priceKil-PRD-45d705b3d-2bb22d04',
      'OPERATION-NAME': 'findCompletedItems',
      keywords: searchQuery,
      itemSort: 'BestMatch',
      'response-data-format': 'JSON'
    })
    .then(
      response => console.log(response.json()))
  }
  return { type: SUBMIT_SEARCH, searchQuery }
}

export const ADD_NAME = 'ADD_NAME';
export function addName(name) {
  return { type: ADD_NAME, name }
}