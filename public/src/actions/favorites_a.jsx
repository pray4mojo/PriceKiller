import axios from 'axios';
//import { setChartView } from './priceHistory_a.jsx';

export const SET_FAVORITES = 'SET_FAVORITES';
export function setFavorites(favorites) {
  return { type: SET_FAVORITES, favorites }
}

export const DELETE_NEW_FAVORITE = 'DELETE_NEW_FAVORITE';
export function deleteNewFavorite(index) {
  return { type: DELETE_NEW_FAVORITE, index }
}

export const ADD_NEW_FAVORITE = 'ADD_NEW_FAVORITE';
export function addNewFavorite(favorite) {
  return { type: ADD_NEW_FAVORITE, favorite }
}

export function deleteFavorite(favorite, username) {
  return function (dispatch) {
    return axios({
      method: 'delete',
      url: `/api/favorites/${username}`,
      data: favorite,
      responsetype: 'json'
    })
      .then((response) => {
        console.log('response.data deleteFavorite: ', response.data);
        dispatch(setFavorites(response.data));
      })
      .catch((err) => console.log(err));
  }
  // return { type: DELETE_FAVORITE, index }
}

export function postNewFavorites(favorites, newFavorites, username) {
  console.log('username: ', username);
  return function (dispatch) {
    newFavorites = newFavorites.map((newFavorite) => {
      return {
        searchQuery: newFavorite.searchQuery,
        categoryId: newFavorite.primaryCategory[0].categoryId[0]
      }
    })
    return axios({
      method: 'post',
      url: `/api/favorites/${username}`,
      data: newFavorites,
      responsetype: 'json'
    })
      .then((response) => {
        console.log('response.data: ', response.data);
        dispatch(setFavorites(response.data));
        dispatch(deleteNewFavorite('all'));
      })
      .catch((err) => console.log(err));
  }
}

  // return function (dispatch) {
  //   const categoryId = favorite.primaryCategory[0].categoryId[0];
  //   favorite.categoryId = categoryId;
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
    // return axios({
    //   method: 'get',
    //   url: `/api/refinedSearch/${favorite.searchQuery}/${categoryId}`,
    //   responseType: 'json'
    // })
    // .then(response => {
    //   favorite.categoryId = categoryId;
    //   favorite.priceHistory = response.data.item
    //   .filter(favorite => favorite.sellingStatus[0].sellingState[0] === 'EndedWithSales')
    //   .sort((a,b) => new Date(a.listingInfo[0].endTime[0]) - new Date(b.listingInfo[0].endTime[0]));
    //   dispatch(setChartView(favorite));
    //   // dispatch(storeFavorite(favorite));
    // })
  // }
  //return { type: ADD_FAVORITE, favorite }
//}