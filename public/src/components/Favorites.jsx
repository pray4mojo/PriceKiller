import React from 'react';
import { connect } from 'react-redux';
import { submitSearch, setResultsPage } from '../actions/main_a.jsx';
import { deleteFavorite, deleteNewFavorite, postNewFavorites } from '../actions/favorites_a.jsx';

const mapStateToProps = state => {
  let username;
  if (state.auth.user) {
    username = state.auth.user.username;
  }
  return {
    username,
    favorites: state.favorites.favorites,
    newFavorites: state.favorites.newFavorites,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (favorite, username) => {
      dispatch(deleteFavorite(favorite, username));
    },

    removeNewFavorite: (index) => {
      dispatch(deleteNewFavorite(index));
    },

    saveNewFavorites: (favorites, newFavorites, username) => {
      dispatch(postNewFavorites(favorites, newFavorites, username));
    }
  }
}

let Favorites = (props) => {
  let favoritesList, newFavoritesList, favoritesTitle
  if (props.favorites) {
    if (props.favorites.length === 0) {
      favoritesTitle = 'No Favorites';
    } else {
      favoritesTitle = 'Favorites: ';
    }
    favoritesList = (
      <div>
        <h3>{favoritesTitle}</h3>
        <ul>
          {props.favorites.map((favorite, key) => {
            return (
              <li
                key={key}
                id="favorite"
              >
                {favorite.searchQuery}
                <button
                  onClick={() => {props.removeFavorite(favorite, props.username)}}
                >
                  Remove
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
  if (props.newFavorites.length !== 0) {
    newFavoritesList = (
      <div>
        <h3>New Favorites:</h3>
        <ul id="newFavorites">
        {props.newFavorites.map((favorite, key) => {
          return (
            <li key={key} id="newFavorite">{favorite.searchQuery}<button onClick={() => {props.removeNewFavorite(key)}}>Remove</button></li>
          )
        })}
        </ul>
        <button id="saveNewFavorites" onClick={() => props.saveNewFavorites(props.favorites, props.newFavorites, props.username)}>Store New Favorites</button>
      </div>
    );
  }

  return(
    <div>
      {favoritesList}
      {newFavoritesList}
    </div>
  );
}

Favorites = connect(mapStateToProps, mapDispatchToProps)(Favorites);

export default Favorites;