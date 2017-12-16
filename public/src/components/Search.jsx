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

let Search = ({ searchResults, searchQuery, onSearch, incrementResultsPage, decrementResultsPage }) => {
  let items = searchResults.items.filter(item => item.page === searchResults.resultsPage);
  if (items[0].sellingStatus) {
    return (
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
      <nav className="pagination" role="navigation" aria-label="pagination">
      <i className="pagination is-previous column is-half fa fa-arrow-circle-left is-info fa-lg" id="decrementResultsPage" onClick={decrementResultsPage}></i>
      <i className="pagination is-next column is-half fa fa-arrow-circle-right is-info fa-lg" id="incrementResultsPage" onClick={incrementResultsPage}></i>
      </nav>
    </div>
    )
  } else {
    return (<div>
      <form id="search" onSubmit={(event) => {onSearch(event)}}>
        <input type="text" id="searchInput" />
        <input type="submit" value="Submit Search" />
      </form>
      <ul>
        {items.map((item, index) => {
          return <EbayItem key={index} item={item} />
        })}
      </ul>
    </div>)
  }
}

Search = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Search;