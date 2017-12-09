import { SUBMIT_SEARCH } from '../actions/actions.jsx';

const searchQuery = (state = '', action) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return action.searchQuery;
    default:
      return state;
  }
}

export default searchQuery;