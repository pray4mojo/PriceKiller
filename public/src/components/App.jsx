import React from 'react';
import Chart from '../components/Chart.jsx';
import Favorites from '../components/Favorites';
import Navbar from '../components/Navbar.jsx';
import Search from '../components/Search.jsx';

function sum(a, b) {
  return a + b;
}

class App extends React.Component {
  render(){
    return (
      <div className="">
        <Navbar />
        <Search />
      </div>
      )
  }
}
module.exports.sum = sum;
export default App;