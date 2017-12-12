import axios from 'axios';
import { setChartView } from './priceHistory_a.jsx';

export function storeFavorite(item) {
  console.log('this should be saved to db');
}

export function addFavorite(item) {
  return function (dispatch) {
    const categoryId = item.primaryCategory[0].categoryId[0];
    console.log(categoryId);
    return axios({
      method: 'get',
      url: `/api/refinedSearch/${item.searchQuery}/${categoryId}`,
      responseType: 'json'
    })
    .then(response => {
      item.categoryId = categoryId;
      item.priceHistory = response.data.item
      .filter(item => item.sellingStatus[0].sellingState[0] === 'EndedWithSales')
      .sort((a,b) => new Date(a.listingInfo[0].endTime[0]) - new Date(b.listingInfo[0].endTime[0]));
      // .map(item => {
      //   return {
      //     t: item.listingInfo[0].endTime[0],
      //     y: Number(item.sellingStatus[0].convertedCurrentPrice[0].__value__)
      //   }
      //   });
      //console.log('history data: ', item.priceHistory);
      dispatch(setChartView(item));
      //dispatch(storeFavorite(item));
    })
  }
  //return { type: ADD_FAVORITE, item }
}