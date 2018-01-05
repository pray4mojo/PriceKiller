import React from 'react';

const style = {
  spacing: {
    margin: '0.25rem'
  },
  button: {
    maxWidth: '100px'
  }
}

const FavoriteItem = ({ favorite, removeFavorite, username }) => (
  <div className="custom-spacing" style={style.spacing} >
    <div className="columns is-mobile is-gapless" >
      <div className="column is-one-quarter">
        <a
          onClick={() => removeFavorite(favorite, username)}
          className="button is-danger is-small"
          style={style.button}
        >
          Remove
        </a>
      </div>
      <div className="column">
        <span >{favorite.searchQuery}</span>
      </div>
    </div>
  </div>
);



export default FavoriteItem;