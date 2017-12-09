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
  return { type: SUBMIT_SEARCH, searchQuery }
}

export const ADD_NAME = 'ADD_NAME';
export function addName(name) {
  return { type: ADD_NAME, name }
}