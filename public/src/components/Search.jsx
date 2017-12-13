import React from 'react';
import EbayItem from '../components/EbayItem.jsx';
import { connect } from 'react-redux';
import { submitSearch, setResultsPage } from '../actions/main_a.jsx';

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

let Search = ({ searchResults, searchQuery, onSearch, incrementResultsPage, decrementResultsPage }) => (
    <div>
      <form id="search" onSubmit={(event) => {onSearch(event)}}>
        <input type="text" id="searchInput" />
        <input type="submit" value="Submit Search" />
      </form>
      <ul>
        {searchResults.items.filter(item => item.page === searchResults.resultsPage)
          .map((item, index) => {
          return <EbayItem key={index} item={item} />
        })}
      </ul>
      <button id="decrementResultsPage" onClick={decrementResultsPage}>Previous Page</button>
      <button id="incrementResultsPage" onClick={incrementResultsPage}>Next Page</button>
    </div>
)

Search = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Search;