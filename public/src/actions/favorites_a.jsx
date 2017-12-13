import axios from 'axios';
import { setChartView } from './priceHistory_a.jsx';

export function storeFavorite(item) {
  console.log('this should be saved to db');
}

export function addFavorite(favorite) {
  return function (dispatch) {
    const categoryId = favorite.primaryCategory[0].categoryId[0];
    favorite.categoryId = categoryId;
    // let favorites = [favorite];
    // favorites = favorites.map((favorite) => {
    //   return {
    //     searchQuery: favorite.searchQuery,
    //     categoryId: favorite.categoryId
    //   }
    // });
    // return axios({
    //   method: 'post',
    //   url: `/api/favorites/`,
    //   data: favorites,
    //   responsetype: 'json'
    // });
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
      dispatch(setChartView(favorite));
      // dispatch(storeFavorite(favorite));
    })
  }
  //return { type: ADD_FAVORITE, favorite }
}