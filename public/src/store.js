import { createStore } from 'redux';
import reduceLight from './reducers/main.js';

const store = createStore(reduceLight, {names: ['yazhi', 'brian', 'luke']});
store.subscribe(() => {
  console.log('store change: ', store.getState())
});

export default store;