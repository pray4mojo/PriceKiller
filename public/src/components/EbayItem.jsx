import React from 'react';

let ebayItem = ({ item, addToFavorites }) => {
  let favoriteButton = <button onClick={() => addToFavorites(item)}>Favorite</button>;
  if (item.title === 'Submit a search query to see what Ebay has available!') {
    favoriteButton = '';
  }
  return (
    <li>{item.title} {favoriteButton}</li>
  )
}


export default ebayItem;