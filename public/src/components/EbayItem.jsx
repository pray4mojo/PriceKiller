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
  let favoriteButton = <a className="btn has-text-warning"><i className="fa fa-star is-warning fa-lg" aria-hidden="true" onClick={() => addToFavorites(item)}></i></a>;
  if (item.title === 'Submit a search query to see what Ebay has available!') {
    favoriteButton = '';
  }
  let price = item.sellingStatus ? `$${item.sellingStatus[0].convertedCurrentPrice[0].__value__}` : null;
  let image = item.galleryURL || null;
  if (item.sellingStatus) {
    return (
      <li className="columns is-mobile is-centered">
        <div className="column is-one-quarters">
          <img className="image is-128x128" src={image} />
        </div>
        <div className="column is-two-quarters">
          {item.title}
        </div>
        <div className="column is-one-quarter">
          {price}<br/>
          {favoriteButton}
        </div>
      </li>
    )
  } else {
    return (<li>{item.title}</li>)
  }
}

EbayItem = connect(mapStateToProps, mapDispatchToProps)(EbayItem);
export default EbayItem;

   // <figure className="image is-128x128">
   //    <img className="image is-128x128" src={image} />
   //    </figure>