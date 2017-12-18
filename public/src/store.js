
let store;
if (process.env.NODE_ENV === 'production') {
  store = require('./store.production.js').store;
} else {
  store = require('./store.dev.js').store;
}


export default store;