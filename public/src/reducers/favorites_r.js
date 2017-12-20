import { SET_FAVORITES, DELETE_NEW_FAVORITE, ADD_NEW_FAVORITE } from '../actions/favorites_a';

const defaultState = {
  favorites: [],
  newFavorites: [],
  isFavorited: {},
};

const favorites = (state = defaultState, action) => {
  let updatedNewFavorites = state.newFavorites.slice(0);
  const updatedIsFavorited = Object.assign({}, state.isFavorited);
  switch (action.type) {
    case SET_FAVORITES:
      return Object.assign({}, state, { favorites: action.favorites });
    case DELETE_NEW_FAVORITE:
      if (action.index === 'all') {
        updatedNewFavorites = [];
      } else {
        updatedIsFavorited[action.newFavorite.itemId[0]] = false;
        updatedNewFavorites = updatedNewFavorites.filter(newFavorite => newFavorite.itemId[0] !== action.newFavorite.itemId[0]);
      }
      return Object.assign(
        {},
        state,
        { newFavorites: updatedNewFavorites, isFavorited: updatedIsFavorited },
      );
    case ADD_NEW_FAVORITE:
      updatedIsFavorited[action.newFavorite.itemId[0]] = true;
      updatedNewFavorites.push(action.newFavorite);
      return Object.assign(
        {},
        state,
        { newFavorites: updatedNewFavorites, isFavorited: updatedIsFavorited },
      );
    default:
      return state;
  }
};

export default favorites;
