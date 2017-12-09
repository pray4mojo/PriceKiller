import axios from 'axios';


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
      console.log(response.data.item);
      const priceHistory = response.data.item
      .filter(item => item.sellingStatus[0].sellingState[0] === 'EndedWithSales')
      .map(item => [item.listingInfo[0].endTime[0], Number(item.sellingStatus[0].convertedCurrentPrice[0].__value__)]);
      console.log('history data: ', priceHistory);
    })
  }
  return { type: ADD_FAVORITE, item }
}