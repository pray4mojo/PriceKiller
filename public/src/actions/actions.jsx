export const REQUEST_RESULTS = 'REQUEST_RESULTS';
export const RESULTS_RETURNED = 'RESULTS_RETURNED';
export const SUBMIT_SEARCH = 'SUBMIT_SEARCH';
export const ADD_NAME = 'ADD_NAME';

export function requestResults(searchQuery) {
  return { type: REQUEST_RESULTS, searchQuery }
}

export function resultsReturned(searchResults) {
  return { type: RESULTS_RETURNED, searchResults }
}

export function submitSearch(searchQuery) {
  return { type: SUBMIT_SEARCH, searchQuery }
}

export function addName(name) {
  return { type: ADD_NAME, name }
}