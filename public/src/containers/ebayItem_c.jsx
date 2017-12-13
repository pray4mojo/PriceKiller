import ebayItem from '../components/EbayItem.jsx';
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

const EbayItemContainer = connect(mapStateToProps, mapDispatchToProps)(ebayItem);
export default EbayItemContainer;