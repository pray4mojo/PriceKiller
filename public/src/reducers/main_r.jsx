import searchQuery from './searchQuery_r';
import searchResults from './searchResults_r';
import priceHistory from './priceHistory_r';
import favorites from './favorites_r';

import { combineReducers } from 'redux';
import userState from './userProfile_r.jsx';

const mainReducer = combineReducers({
  searchQuery, searchResults, priceHistory, userState, favorites,
});

export default mainReducer;
