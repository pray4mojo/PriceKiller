import searchQuery from './searchQuery.jsx';
import searchResults from './searchResults.jsx';
import names from './names.jsx';
import { combineReducers } from 'redux'

// const mainReducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return Object.assign({}, state, { names: names(state.names, action) });
//     case 'SEARCH_QUERY':
//       return Object.assign({}, state, { searchQuery: searchQuery(state.searchQuery, action)});
//     case 'SEARCH_RESULTS':
//       return Object.assign({}, state, { searchResults: searchResults(state.searchResults, action) });
//     default:
//       return state;
//   }
// }

const mainReducer = combineReducers({ searchQuery, names, searchResults });

export default mainReducer;