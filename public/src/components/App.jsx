import React from 'react';
import Chart from '../components/Chart.jsx';
import Favorites from '../components/Favorites.jsx';
import Navbar from '../components/Navbar.jsx'

function sum(a, b) {
  return a + b;
}

class App extends React.Component {
  render(){
    return (
      <div className="section">
        <Navbar />
      </div>
      )
  }
}
module.exports.sum = sum;
export default App;