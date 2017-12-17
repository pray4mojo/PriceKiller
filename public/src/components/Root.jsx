import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.jsx';
import Search from './Search.jsx';
import Favorites from './Favorites.jsx';
import Chart from './Chart.jsx';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <div><Route path="/" component={App}/>
      <Route path="/signout" render={() => <button onClick={() => this.onLogoutClick()} className="button is-light">Logout</button>}/>
      <Route path="/search" component={Search}/>
      <Route path="/favorites" component={Favorites} />
      <Route path="/chart" component={Chart} /></div>
    </Router>
  </Provider>
  )

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root