import searchQuery from './searchQuery_r.jsx';
import searchResults from './searchResults_r.jsx';
import priceHistory from './priceHistory_r.jsx';
import auth from './Auth_r.jsx';
import { combineReducers } from 'redux'

const mainReducer = combineReducers({ searchQuery, searchResults, priceHistory auth });

export default mainReducer;