import React from 'react';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import NameList from '../containers/nameList.js';
import store from '../reducers/main.js';

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
export default App;