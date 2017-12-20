import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from './reducers/main_r.jsx';


const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));

module.exports.store = store;
