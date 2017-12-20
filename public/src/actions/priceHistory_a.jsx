import axios from 'axios';

export const SET_CHART_VIEW = 'SET_CHART_VIEW';
export function setChartView(priceHistory) {
  return { type: SET_CHART_VIEW, priceHistory}
}
export const SET_AUCTION_VIEW = 'SET_AUCTION_VIEW';
export function setAuctionView(auctions) {
  return { type: SET_AUCTION_VIEW, auctions}
}
export const SET_GRAPH_THRESHOLD = 'SET_GRAPH_THRESHOLD';
export function setGraphThreshold(high, low) {
  return { type: SET_GRAPH_THRESHOLD, high, low}
}
export function getPriceHistory(searchQuery) {
  return function (dispatch) {
    return axios({
      method: 'get',
      url: `/api/prices/${searchQuery}`,
      responsetype: 'json'
    })
      .then((response) => {
        const priceHistory = response.data.priceHistory.priceHistory;
        //const auctions = response.data.auctions.auctions;
        dispatch(setChartView(priceHistory));
        //setAuctionView is necessary to show a scatter plot, but a lot of unneccessary data placed in the state if we are not going to use it
        //dispatch(setAuctionView(auctions));
      })
      .catch((err) => console.log(err));
  }
}