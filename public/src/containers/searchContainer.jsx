import search from '../components/search.jsx';
import { connect } from 'react-redux';
import { submitSearch, setResultsPage } from '../actions/actions.jsx';

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    searchQuery: state.searchQuery
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (event) => {
      const searchQuery = event.target.childNodes[0].value;
      dispatch(submitSearch(searchQuery));
      event.target.childNodes[0].value = '';
      event.preventDefault();
    },

    incrementResultsPage: () => {
      dispatch(setResultsPage(1));
    },

    decrementResultsPage: () => {
      dispatch(setResultsPage(-1));
    }
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(search);

export default SearchContainer;