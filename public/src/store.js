import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './reducers/main.js';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

let store;
if (process.env.NODE_ENV === 'production') {
  store = createStore(
    mainReducer,
    {names: ['yazhi', 'brian', 'luke']}
  );
} else {
  store = createStore(
    mainReducer,
    compose(
      applyMiddleware(
        createLogger(),
        thunkMiddleware
      ),
      devToolsEnhancer()
    )
  )
}


export default store;