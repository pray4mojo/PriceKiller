import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';
import App from './App.jsx';
import Search from './Search.jsx';
import Favorites from './Favorites';
import Chart from './Chart.jsx';
import Login from './Login.jsx';
import {Redirect} from 'react-router-dom';
import Auth from "../../../Auth/Auth.js";
import history from "../../../Auth/history.js";

const auth = new Auth;
console.log('auth-->', auth);
console.log('history =======>', history);

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
      <Route path="/" component={App}/>

      <Route path="/signout" render={() => <button onClick={() => this.onLogoutClick()} className="button is-light">Logout</button>}/>
      <Route path="/search" component={Search}/>
      <Route path="/login" component={Login}/>
      <Route path="/favorites" component={Favorites} />
      <Route path="/chart" component={Chart} />
      <Route path="/loggedout" component={() => <p>You have been logged out of your profile</p>} />
      </div>
    </Router>
  </Provider>
  )

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;

// {localStorage.getItem('profile') ? <Redirect to="/" /> : <div></div>}
// <Route path="/signout" render={() => <button onClick={() => this.onLogoutClick()} className="button is-light">Logout</button>}/>