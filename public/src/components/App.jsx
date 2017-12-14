import React from 'react';
import Search from '../components/Search.jsx';
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
        <Search />
        <Favorites />
        <Chart />
      </div>
      )
  }
}
module.exports.sum = sum;
export default App;