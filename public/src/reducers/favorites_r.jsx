import { SET_FAVORITES , DELETE_NEW_FAVORITE, ADD_NEW_FAVORITE } from '../actions/favorites_a.jsx';

const defaultState = {
  favorites: [],
  newFavorites: []
}

const favorites = (state = defaultState, action) => {
  let updatedNewFavorites = state.newFavorites.slice(0);
  switch (action.type) {
    case SET_FAVORITES:
      return Object.assign({}, state, { favorites: action.favorites });
    case DELETE_NEW_FAVORITE:
      if (action.index === 'all') {
        updatedNewFavorites = [];
      } else {
        updatedNewFavorites.splice(action.index, 1);
      }
      return Object.assign({}, state, { newFavorites: updatedNewFavorites });
    case ADD_NEW_FAVORITE:
      updatedNewFavorites.push(action.favorite);
      return Object.assign({}, state, { newFavorites: updatedNewFavorites });
    default:
      return state;
  }

}

export default favorites;