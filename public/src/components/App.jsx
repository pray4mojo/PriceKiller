import React from 'react';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import NameList from '../containers/nameList.js';
import store from '../reducers/main.js';

function sum(a, b) {
  return a + b;
}

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <NameList
        />
      </Provider>
      )

  }
}
module.exports.sum = sum;
export default App;