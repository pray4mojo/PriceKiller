import React from 'react';
import Chart from '../components/Chart.jsx';
import Favorites from '../components/Favorites';
import Navbar from '../components/Navbar.jsx'

function sum(a, b) {
  return a + b;
}

class App extends React.Component {
  render(){
    return (
      <div className="">
        <Navbar />
        <img src="https://s3-us-west-1.amazonaws.com/hackreactor27/PriceKiller_pricegun.png" alt="" width="480" height="240"/>
      </div>
      )
  }
}
module.exports.sum = sum;
export default App;