import React from 'react';
import NameList from '../containers/nameList.js';


function sum(a, b) {
  return a + b;
}

class App extends React.Component {
  render(){
    return (
        <NameList />
      )

  }
}
module.exports.sum = sum;
export default App;