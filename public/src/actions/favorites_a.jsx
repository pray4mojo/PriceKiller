import axios from 'axios';
import { setChartView } from './priceHistory_a.jsx';

export function storeFavorite(item) {
  console.log('this should be saved to db');
}

export function addFavorite(favorite) {
  return function (dispatch) {
    const categoryId = favorite.primaryCategory[0].categoryId[0];
    console.log(categoryId);
    return axios({
      method: 'get',
      url: `/api/refinedSearch/${favorite.searchQuery}/${categoryId}`,
      responseType: 'json'
    })
    .then(response => {
      favorite.categoryId = categoryId;
      favorite.priceHistory = response.data.item
      .filter(favorite => favorite.sellingStatus[0].sellingState[0] === 'EndedWithSales')
      .sort((a,b) => new Date(a.listingInfo[0].endTime[0]) - new Date(b.listingInfo[0].endTime[0]));
      // .map(favorite => {
      //   return {
      //     t: favorite.listingInfo[0].endTime[0],
      //     y: Number(favorite.sellingStatus[0].convertedCurrentPrice[0].__value__)
      //   }
      //   });
      //console.log('history data: ', favorite.priceHistory);
      dispatch(setChartView(favorite));
      //dispatch(storeFavorite(favorite));
    })
  }
  //return { type: ADD_FAVORITE, favorite }
}