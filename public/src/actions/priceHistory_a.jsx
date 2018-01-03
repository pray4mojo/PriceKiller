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
export function setGraphThreshold(low, high) {
  return { type: SET_GRAPH_THRESHOLD, low, high}
}
export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';
export function setCurrentItem(searchQuery) {
  return { type: SET_CURRENT_ITEM, searchQuery }
}
export function getPriceHistory(searchQuery) {
  return function (dispatch) {
    return axios({
      method: 'get',
      url: `/api/prices/${searchQuery}`,
      responseType: 'json'
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

export function updateNotification(username, searchQuery, low, high) {
  return function (dispatch) {
    return axios({
      method: 'post',
      url: `api/notifications`,
      data: {
        username,
        searchQuery,
        low,
        high
      },
      responseType: 'json'
    })
      .then((response) => {
        console.log('We got the response: ', response);
      })
      .catch((err) => console.log(err));
  }
}