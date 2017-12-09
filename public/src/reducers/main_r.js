import searchQuery from './searchQuery_r.jsx';
import searchResults from './searchResults_r.jsx';
import priceHistory from './priceHistory_r.jsx';
import { combineReducers } from 'redux'

const mainReducer = combineReducers({ searchQuery, searchResults, priceHistory });

export default mainReducer;