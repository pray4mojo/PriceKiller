import searchQuery from './searchQuery_r.jsx';
import searchResults from './searchResults_r.jsx';
import priceHistory from './priceHistory_r.jsx';
import favorites from './favorites_r.jsx';
import userProfile from './userProfile_r.jsx';
import { combineReducers } from 'redux'

const mainReducer = combineReducers({ searchQuery, searchResults, userProfile, priceHistory, favorites });

export default mainReducer;