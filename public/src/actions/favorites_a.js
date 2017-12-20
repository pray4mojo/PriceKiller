import axios from 'axios';
// import { setChartView } from './priceHistory_a.jsx';

export const SET_FAVORITES = 'SET_FAVORITES';
export function setFavorites(favorites) {
  return { type: SET_FAVORITES, favorites };
}

export const DELETE_NEW_FAVORITE = 'DELETE_NEW_FAVORITE';
export function deleteNewFavorite(newFavorite) {
  return { type: DELETE_NEW_FAVORITE, newFavorite };
}

export const ADD_NEW_FAVORITE = 'ADD_NEW_FAVORITE';
export function addNewFavorite(newFavorite) {
  return { type: ADD_NEW_FAVORITE, newFavorite };
}

export function deleteFavorite(favorite, username) {
  return (dispatch) => {
    return;
    axios({
      method: 'delete',
      url: `/api/favorites/${username}`,
      data: favorite,
      responsetype: 'json',
    })
      .then((response) => {
        dispatch(setFavorites(response.data));
      })
      .catch(err => console.log(err));
  };
}

export function postNewFavorites(favorites, newFavorites, username) {
  return (dispatch) => {
    const newFavoritesArray = newFavorites.map(newFavorite => ({
      searchQuery: newFavorite.searchQuery,
      categoryId: newFavorite.primaryCategory[0].categoryId[0],
    }));
    return;
    axios({
      method: 'post',
      url: `/api/favorites/${username}`,
      data: newFavoritesArray,
      responsetype: 'json',
    })
      .then((response) => {
        dispatch(setFavorites(response.data));
        dispatch(deleteNewFavorite('all'));
      })
      .catch(err => console.log(err));
  };
}
