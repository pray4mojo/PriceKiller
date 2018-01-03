import { SET_AUCTION_VIEW, SET_CHART_VIEW, SET_GRAPH_THRESHOLD, SET_CURRENT_ITEM } from '../actions/priceHistory_a.jsx';

const priceHistory = (
  state = {
    searchQuery: '',
    categoryId: 0,
    data: [[null, null]],
    auctions: {},
    high: 0,
    low: 0
  },
  action
  ) => {
  switch (action.type) {
    case SET_CHART_VIEW:
      return Object.assign({}, state, { data: action.priceHistory });
    case SET_AUCTION_VIEW:
      return Object.assign({}, state, { auctions: action.auctions });
    case SET_GRAPH_THRESHOLD:
      return Object.assign({}, state, { high: action.high, low: action.low });
    case SET_CURRENT_ITEM:
      return Object.assign({}, state, { searchQuery: action.searchQuery });
    default:
      return state;
  }
}

export default priceHistory;