import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './reducers/main_r.js';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';


const store = createStore(
  mainReducer,
  compose(
    applyMiddleware(
      createLogger(),
      thunkMiddleware
    ),
    devToolsEnhancer()
  )
)


module.exports.store = store;