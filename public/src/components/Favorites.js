import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FavoriteItem from './FavoriteItem.jsx';
import NewFavoriteItem from './NewFavoriteItem.jsx';
import { deleteFavorite, deleteNewFavorite, postNewFavorites } from '../actions/favorites_a';

const mapStateToProps = (state) => {
  let username;
  if (state.userState.username !== '') {
    username = state.userState.username;
  }
  return {
    username,
    favorites: state.favorites.favorites,
    newFavorites: state.favorites.newFavorites,
  };
};

const mapDispatchToProps = dispatch => ({
  removeFavorite: (favorite, username) => {
    dispatch(deleteFavorite(favorite, username));
  },

  removeNewFavorite: (newFavorite) => {
    dispatch(deleteNewFavorite(newFavorite));
  },

  saveNewFavorites: (favorites, newFavorites, username) => {
    dispatch(postNewFavorites(favorites, newFavorites, username));
  },
});
const nightStyle = {
  cardContent: {
    paddingLeft: '0',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
  card: {
    color: '#87A3BB',
    backgroundColor: '#22282F',
  },
};
// const style = {
//   cardContent: {
//     paddingLeft: '0',
//     paddingTop: '0.5rem',
//     paddingBottom: '0.5rem',
//   },
//   card: {

//   },
// };

let Favorites = (props) => {
  let favoritesList;
  let newFavoritesList;
  if (props.favorites) {
    if (props.favorites.length === 0) {
      favoritesList = (
        <div className="card" style={nightStyle.card}>
          <header className="card-header">
            No Stored Favorites
          </header>
        </div>);
    } else {
      favoritesList = (
        <div className="card" style={nightStyle.card}>
          <header className="card-header">
            Favorites
          </header>
          <div className="card-content" style={nightStyle.cardContent}>
            {props.favorites.map((favorite, key) => (
              <FavoriteItem
                key={favorite.searchQuery}
                index={key}
                favorite={favorite}
                username={props.username}
                removeFavorite={props.removeFavorite}
              />
            ))}
          </div>
        </div>
      );
    }
  }
  if (props.newFavorites.length !== 0) {
    newFavoritesList = (
      <div className="card" style={nightStyle.card}>
        <header className="card-header">
          New Favorites
        </header>
        <div
          className="card-content"
          style={nightStyle.cardContent}
        >
          {props.newFavorites.map(newFavorite => (
            <NewFavoriteItem
              newFavorite={newFavorite}
              removeNewFavorite={props.removeNewFavorite}
              key={newFavorite.itemId[0]}
            />
          ))}
        </div>
        <a
          id="saveNewFavorites"
          className="button is-info is-small is-one-fifth"
          onClick={() =>
            props.saveNewFavorites(props.favorites, props.newFavorites, props.username)
          }
        >
          Store New Favorite(s)
        </a>
      </div>
    );
  }

  return (
    <div >
      {favoritesList}
      {newFavoritesList}
    </div>
  );
};

Favorites.propTypes = {
  username: PropTypes.string.isRequired,
  favorites: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  removeFavorite: PropTypes.func.isRequired,
  removeNewFavorite: PropTypes.func.isRequired,
  saveNewFavorites: PropTypes.func.isRequired,
  newFavorites: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

Favorites = connect(mapStateToProps, mapDispatchToProps)(Favorites);

export default Favorites;
