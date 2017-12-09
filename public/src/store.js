import { createStore } from 'redux';
import mainReducer from './reducers/main.js';
import { devToolsEnhancer } from 'redux-devtools-extension';
let store;
if (process.env.NODE_ENV === 'production') {
  store = createStore(mainReducer, {names: ['yazhi', 'brian', 'luke']});
} else {
  store = createStore(mainReducer, devToolsEnhancer());
}
store.subscribe(() => {
  console.log('store change: ', store.getState())
});

export default store;