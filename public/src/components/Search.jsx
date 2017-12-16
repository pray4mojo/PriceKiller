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
      <div className="card">
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
      <nav className="pagination columns is-mobile is-centered" role="navigation" aria-label="pagination">
      <button className="pagination is-previous column is-half fa fa-arrow-circle-left is-medium is-info " id="decrementResultsPage" onClick={decrementResultsPage}></button>
      <button className="pagination is-next is-info column is-half fa fa-arrow-circle-right is-medium is-info " id="incrementResultsPage" onClick={incrementResultsPage}></button>
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