import { REQUEST_RESULTS, RESULTS_RETURNED } from '../actions/actions.jsx';

const searchResults = (
  state = {
    isFetching: false,
    items: ['trial search 1', 'trial search 2', 'trial search 3']
  },
  action
  ) => {
  switch (action.type) {
    case REQUEST_RESULTS:
      return Object.assign({}, state, { isFetching: true });

    case RESULTS_RETURNED:
      return Object.assign({}, state, { isFetching: false, items: action.searchResults });
    default:
      return state;
  }
}

export default searchResults;
