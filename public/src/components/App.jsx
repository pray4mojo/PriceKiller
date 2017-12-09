import React from 'react';
import SearchContainer from '../containers/search_c.jsx';
import ChartContainer from '../containers/chart_c.jsx';
import NameList from '../containers/nameList.js';
import SearchContainer from '../containers/searchContainer.jsx';
import Login from '../containers/Login_c.jsx'

function sum(a, b) {
  return a + b;
}

class App extends React.Component {
  render(){
    return (
      <div>
        <SearchContainer />
        <ChartContainer />
        <Login />
      </div>
      )
  }
}
module.exports.sum = sum;
export default App;