import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNewFavorite, addNewFavorite } from '../actions/favorites_a';

const mapStateToProps = (state, ownProps) => {
  let starClass = '';
  if (ownProps.item.itemId) {
    starClass = state.favorites.isFavorited[ownProps.item.itemId[0]] ? 'btn has-text-warning' : 'btn has-text-black';
  }
  return {
    starClass,
    item: ownProps.item,
    index: ownProps.index,
    isFavorited: state.favorites.isFavorited
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNewFavorite: (e, item, isFavorited) => {
      if (!isFavorited[item.itemId[0]]) {
        $(e.target).removeClass('has-text-black');
        $(e.target).addClass('has-text-warning');
        dispatch(addNewFavorite(item));
      } else {
        $(e.target).removeClass('has-text-warning');
        $(e.target).addClass('has-text-black');
        dispatch(deleteNewFavorite(item));
      }
    },
  }
}

class EbayItem extends Component {
  constructor(props) {
    super(props);
    this.starClass = '';
    if (this.props.item.itemId) {
      this.starClass = this.props.isFavorited[this.props.item.itemId[0]] ? 'btn has-text-warning' : 'btn has-text-black';
    }

  }

  render() {
    const item = this.props.item;
    const index = this.props.index;
    const isFavorited = this.props.isFavorited;
    const toggleNewFavorite = this.props.toggleNewFavorite.bind(this);

    let favoriteButton = <a className={this.starClass} onClick={(e) => toggleNewFavorite(e, item, isFavorited)}><i className="fa fa-star is-warning fa-lg" aria-hidden="true"></i></a>;
    if (item.title === 'Submit a search query to see what Ebay has available!') {
      favoriteButton = '';
    }
    let price = item.sellingStatus ? `$${item.sellingStatus[0].convertedCurrentPrice[0].__value__}` : null;
    let image = item.galleryURL || null;
    if (item.sellingStatus) {
      return (
        <li className="columns is-mobile is-centered">
          <div className="column is-one-quarters">
            <a href={item.viewItemURL[0]}><img className="image is-128x128" src={image} /></a>
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
}

EbayItem = connect(mapStateToProps, mapDispatchToProps)(EbayItem);
export default EbayItem;

   // <figure className="image is-128x128">
   //    <img className="image is-128x128" src={image} />
   //    </figure>