import React from 'react';
import SearchContainer from '../containers/search_c.jsx';
import ChartContainer from '../containers/chart_c.jsx';
import NameList from '../containers/nameList.js';
import SearchContainer from '../containers/searchContainer.jsx';
import Auth from '../containers/Auth_c.jsx'

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
        <Auth />
        <NameList />
        <SearchContainer />
      </div>
      )
  }
}
module.exports.sum = sum;
export default App;