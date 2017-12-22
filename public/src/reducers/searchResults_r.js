import { REQUEST_RESULTS, RESULTS_RETURNED, SET_RESULTS_PAGE, SET_MAX_PAGE, APPEND_RESULTS, SET_INITIAL_PAGE } from '../actions/main_a.jsx';

let nextPage;
const searchResults = (
  state = {
    resultsPage: 0,
    maxPage: 0,
    isFetching: false,
    items: [{ title: 'Submit a search query to see what Ebay has available!', page: 0 }],
    endOfResults: false,
    searchQuery: ''
  },
  action,
) => {
  switch (action.type) {
    case SET_INITIAL_PAGE:
      return Object.assign({}, state, { resultsPage: 0 });

    case REQUEST_RESULTS:
      return Object.assign({}, state, { isFetching: true, searchQuery: action.searchQuery });

    case RESULTS_RETURNED:
      return Object.assign({}, state, { isFetching: false, items: action.searchResults });

    case APPEND_RESULTS:
      return Object.assign({}, state, { items: state.items.concat(action.newSearchResults) });

    case SET_RESULTS_PAGE:
      nextPage = state.resultsPage + action.resultsPage;
      if (nextPage < 0 || nextPage > state.maxPage) {
        nextPage = state.resultsPage;
      }
      if (action.resultsPage === 0) {
        nextPage = 0;
      }
      return Object.assign({}, state, { resultsPage: nextPage });

    case SET_MAX_PAGE:
      return Object.assign({}, state, { maxPage: action.maxPage });

    default:
      return state;
  }
};

export default searchResults;
