import React from 'react';
import NameList from '../containers/nameList.js';
import SearchContainer from '../containers/searchContainer.jsx';

function forEach(items, callback) {
  for (let i = 0; i < items.length; i++) {
    callback(items[i])
  }
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
module.exports.forEach = forEach;
export default App;