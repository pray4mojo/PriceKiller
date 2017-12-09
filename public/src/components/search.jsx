import React from 'react';

let search = ({ searchResults, searchQuery, onSearch }) => {
  return (
    <div>
      <form id="search" onSubmit={(event) => {onSearch(event)}}>
        <input type="text" id="searchInput" />
        <input type="submit" value="Submit Search" />
      </form>
      <ul>
        {searchResults.items.map((elem, index) => {
          return <li key={index}>{elem}</li>
        })}
      </ul>
    </div>
  )
}

export default search;