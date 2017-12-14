import { SET_CHART_VIEW } from '../actions/priceHistory_a.jsx';

const priceHistory = (
  state = {
    searchQuery: '',
    categoryId: 0,
    data: [[null, null]]
  },
  action
  ) => {
  switch (action.type) {
    case SET_CHART_VIEW:
      return Object.assign({}, state, { data: action.priceHistory });
    default:
      return state;
  }
}

// return Object.assign({}, state, { searchQuery: action.favorite.searchQuery, data: action.favorite.priceHistory, categoryId: action.favorite.categoryId });

export default priceHistory;