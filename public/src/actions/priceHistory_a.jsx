import axios from 'axios';

export const SET_CHART_VIEW = 'SET_CHART_VIEW';
export function setChartView(priceHistory) {
  return { type: SET_CHART_VIEW, priceHistory}
}
export function getPriceHistory(searchQuery) {
  return function (dispatch) {
    return axios({
      method: 'get',
      url: `/api/prices/${searchQuery}`,
      responsetype: 'json'
    })
      .then((response) => {
        const priceHistory = response.data.priceHistory;
        dispatch(setChartView(priceHistory));
      })
      .catch((err) => console.log(err));
  }
}