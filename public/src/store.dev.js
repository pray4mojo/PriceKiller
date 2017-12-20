import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import mainReducer from './reducers/main_r.jsx';

const store = createStore(
  mainReducer,
  compose(
    applyMiddleware(
      createLogger(),
      thunkMiddleware,
    ),
    devToolsEnhancer(),
  ),
);


module.exports.store = store;
