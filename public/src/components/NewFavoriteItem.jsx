import React from 'react';

const style = {
  spacing: {
    margin: '0.25rem'
  }
}

const NewFavoriteItem = ({ favorite, removeNewFavorite, index }) => (
  <div className="custom-spacing" style={style.spacing} >
    <div className="columns is-mobile is-gapless" style={style.favorite}>
      <div className="column">
        <span >{favorite.searchQuery}</span>
      </div>
      <div className="column is-one-fifth">
        <a
          onClick={() => removeNewFavorite(index)}
          className="button is-danger is-small"
        >
          Remove
        </a>
      </div>
    </div>
  </div>
);



export default NewFavoriteItem;