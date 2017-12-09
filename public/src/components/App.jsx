import React from 'react';
import NameList from '../containers/nameList.js';

function forEach(items, callback) {
  for (let i = 0; i < items.length; i++) {
    callback(items[i])
  }
}
class App extends React.Component {
  render(){
    return (
        <NameList />
      )

  }
}
module.exports.forEach = forEach;
export default App;