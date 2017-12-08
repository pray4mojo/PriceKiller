import { createStore } from 'redux';
//import { devToolsEnhancer } from 'redux-devtools-extension';

const reduceLight = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {names: state.names.concat([action.name
        ])})
    default:
      return state;
  }
}

const store = createStore(reduceLight, {names: ['yazhi', 'brian', 'luke']}, /*devToolsEnhancer()*/);
store.subscribe(() => {
  console.log('store change: ', store.getState())
});

export default store;