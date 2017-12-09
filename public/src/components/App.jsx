import React from 'react';
import NameList from '../containers/nameList.js';
import SearchContainer from '../containers/searchContainer.jsx';

function sum(a, b) {
  return a + b;
}

class App extends React.Component {
  render(){
    return (
      <div>
        <NameList />
        <SearchContainer />
      </div>
      )

  }
}
module.exports.sum = sum;
export default App;