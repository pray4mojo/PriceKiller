import React from 'react';
import FavoriteItem from './FavoriteItem.jsx';
import NewFavoriteItem from './NewFavoriteItem.jsx';
import { connect } from 'react-redux';
import { submitSearch, setResultsPage } from '../actions/main_a.jsx';
import { deleteFavorite, deleteNewFavorite, postNewFavorites } from '../actions/favorites_a.jsx';

const mapStateToProps = (state) => {
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

    removeNewFavorite: (newFavorite) => {
      dispatch(deleteNewFavorite(newFavorite));
    },

    saveNewFavorites: (favorites, newFavorites, username) => {
      dispatch(postNewFavorites(favorites, newFavorites, username));
    }
  }
}

const style = {
  cardContent: {
    paddingLeft: '0',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  },
  card: {
    color: '#87A3BB',
    backgroundColor: '#22282F'
  }
}

let Favorites = (props) => {
  let favoritesList;
  let newFavoritesList;
  let favoritesTitle;
  if (props.favorites) {
    if (props.favorites.length === 0) {
      favoritesList = (
        <div className="card" style={style.card}>
          <header className="card-header">
            No Favorites
          </header>
        </div>)
    } else {
      favoritesList = (
        <div className="card" style={style.card}>
          <header className="card-header">
            Favorites
          </header>
          <div className="card-content" style={style.cardContent}>
            {props.favorites.map((favorite, key) => {
              return (<FavoriteItem key={key} index={key} favorite={favorite} username={props.username} removeFavorite={props.removeFavorite} />)
            })}
          </div>
        </div>
      );
    }
  }
  if (props.newFavorites.length !== 0) {
    newFavoritesList = (
      <div className="card" style={style.card}>
        <header className="card-header">
          New Favorites
        </header>
        <div className="card-content" style={style.cardContent}>
          {props.newFavorites.map((newFavorite, key) => {
            return (<NewFavoriteItem newFavorite={newFavorite} key={key} removeNewFavorite={props.removeNewFavorite} />)
          })}
        </div>
        <a
          id="saveNewFavorites"
          className="button is-info is-small is-one-fifth"
          onClick={() => props.saveNewFavorites(props.favorites, props.newFavorites, props.username)}
        >
          Store New Favorite(s)
        </a>
      </div>
    );
  }

  return(
    <div >
      {favoritesList}
      {newFavoritesList}
    </div>
  );
}

Favorites = connect(mapStateToProps, mapDispatchToProps)(Favorites);

export default Favorites;