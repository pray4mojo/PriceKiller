import { createStore } from 'redux';
import reduceLight from './reducers/main.js';
import { devToolsEnhancer } from 'redux-devtools-extension';
let store;
if (process.env.NODE_ENV === 'production') {
  store = createStore(reduceLight, {names: ['yazhi', 'brian', 'luke']});
} else {
  store = createStore(reduceLight, {names: ['yazhi', 'brian', 'luke']}, devToolsEnhancer());
}
store.subscribe(() => {
  console.log('store change: ', store.getState())
});

export default store;