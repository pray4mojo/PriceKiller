import React from 'react';

let search = ({ searchResults, searchQuery, onSearch, incrementResultsPage, decrementResultsPage }) => {
  return (
    <div>
      <form id="search" onSubmit={(event) => {onSearch(event)}}>
        <input type="text" id="searchInput" />
        <input type="submit" value="Submit Search" />
      </form>
      <ul>
        {searchResults.items.filter(elem => elem.page === searchResults.resultsPage)
          .map((elem, index) => {
          return <li key={index}>{elem.title}</li>
        }).slice(0,10)}
      </ul>
      <button id="decrementResultsPage" onClick={decrementResultsPage}>Previous Page</button>
      <button id="incrementResultsPage" onClick={incrementResultsPage}>Next Page</button>
    </div>
  )
}

export default search;