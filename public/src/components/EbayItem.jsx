import React from 'react';
import { connect } from 'react-redux';
import { addNewFavorite } from '../actions/favorites_a.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.item,
    index: ownProps.index
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorites: (item) => {
      dispatch(addNewFavorite(item));
    },
  }
}

let EbayItem = ({ item, addToFavorites }) => {
  let favoriteButton = <button onClick={() => addToFavorites(item)}>Favorite</button>;
  if (item.title === 'Submit a search query to see what Ebay has available!') {
    favoriteButton = '';
  }
  return (
    <li>{item.title} {favoriteButton}</li>
  )
}

EbayItem = connect(mapStateToProps, mapDispatchToProps)(EbayItem);
export default EbayItem;