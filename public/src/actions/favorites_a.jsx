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
