import searchQuery from './searchQuery_r.jsx';
import searchResults from './searchResults_r.jsx';
import { combineReducers } from 'redux'

const mainReducer = combineReducers({ searchQuery, searchResults });

export default mainReducer;