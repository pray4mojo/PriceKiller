import React from 'react';
import { connect } from 'react-redux';
import { submitSearch, setResultsPage } from '../actions/main_a.jsx';

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

let Favorites = ({ searchResults, searchQuery, onSearch, incrementResultsPage, decrementResultsPage }) => (
    <div>
      <form id="search" onSubmit={(event) => {onSearch(event)}}>
        <input type="text" id="searchInput" />
        <input type="submit" value="Submit Search" />
      </form>
      <ul>
        {searchResults.items.filter(item => item.page === searchResults.resultsPage)
          .map((item, index) => {
          return <EbayItemContainer key={index} item={item} />
        })}
      </ul>
      <button id="decrementResultsPage" onClick={decrementResultsPage}>Previous Page</button>
      <button id="incrementResultsPage" onClick={incrementResultsPage}>Next Page</button>
    </div>
)

Favorites = connect(mapStateToProps, mapDispatchToProps)(Favorites);

export default Favorites;