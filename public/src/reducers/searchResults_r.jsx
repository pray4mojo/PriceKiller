import { REQUEST_RESULTS, RESULTS_RETURNED, SET_RESULTS_PAGE } from '../actions/main_a.jsx';

const searchResults = (
  state = {
    resultsPage: 0,
    isFetching: false,
    items: [{ title: 'Submit a search query to see what Ebay has available!', page: 0 }]
  },
  action
  ) => {
  switch (action.type) {
    case REQUEST_RESULTS:
      return Object.assign({}, state, { isFetching: true });

    case RESULTS_RETURNED:
      return Object.assign({}, state, { isFetching: false, items: action.searchResults });

    case SET_RESULTS_PAGE:
      let nextPage = state.resultsPage + action.resultsPage;
      if (nextPage < 0 || nextPage > Math.floor(state.items.length / 10) - 1) {
        nextPage = state.resultsPage;
      }
      if (action.resultsPage === 0) {
        nextPage = 0;
      }
      return Object.assign({}, state, { resultsPage: nextPage })
    default:
      return state;
  }
}

export default searchResults;
