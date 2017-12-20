import { SET_AUCTION_VIEW, SET_CHART_VIEW, SET_GRAPH_THRESHOLD } from '../actions/priceHistory_a.jsx';

const priceHistory = (
  state = {
    searchQuery: '',
    categoryId: 0,
    data: [[null, null]],
    auctions: {},
    high: null,
    low: null
  },
  action
  ) => {
  switch (action.type) {
    case SET_CHART_VIEW:
      return Object.assign({}, state, { data: action.priceHistory });
    case SET_AUCTION_VIEW:
      return Object.assign({}, state, { auctions: action.auctions });
    case SET_GRAPH_THRESHOLD:
      return Object.assign({}, state, { high: action.high, low: action.low })
    default:
      return state;
  }
}

export default priceHistory;