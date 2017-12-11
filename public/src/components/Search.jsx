import React from 'react';
import EbayItemContainer from '../containers/ebayItem_c.jsx';

let search = ({ searchResults, searchQuery, onSearch, incrementResultsPage, decrementResultsPage }) => (
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

export default search;