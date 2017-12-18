import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers/main_r.js';
import thunkMiddleware from 'redux-thunk';


const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));

module.exports.store = store;