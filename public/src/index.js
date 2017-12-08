import App from './components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
if (process.env.NODE_ENV === 'production') {
  const store = require('./store.js');
} else {
  const store = require('./store.dev.js');
  console.log('store: ', store);
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));