import React from 'react';
import SearchContainer from '../containers/search_c.jsx';
import Chart from '../components/Chart.jsx';
import AuthContainer from '../containers/auth_c.jsx';
import Favorites from '../components/Favorites.jsx';

function sum(a, b) {
  return a + b;
}

class App extends React.Component {
  render(){
    return (
      <div>
        <AuthContainer />
        <SearchContainer />
        <Chart />
        <Favorites />
      </div>
      )
  }
}
module.exports.sum = sum;
export default App;