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
  let price = item.sellingStatus ? `${item.sellingStatus[0].convertedCurrentPrice[0].__value__}$` : null;
  let image = item.galleryURL || null;
  return (
    <li>

      <img className="image is-128x128" src={image} />

      {item.title}<br/>
      {price}
      {favoriteButton}
    </li>
  )
}

EbayItem = connect(mapStateToProps, mapDispatchToProps)(EbayItem);
export default EbayItem;

   // <figure className="image is-128x128">
   //    <img className="image is-128x128" src={image} />
   //    </figure>