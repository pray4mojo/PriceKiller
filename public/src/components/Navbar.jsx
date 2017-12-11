import React, { Component, PropTypes} from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import { loginUser, logoutUser } from '../actions/auth_a.jsx';

class Navbar extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;
    // console.log('props in navbar.jsx', this.props);
    return(<nav className="navbar navbar-default">
      <div className="container-fluid">
        <a className="navbar-band" href="#">Price Killer</a>
        <div className="navbar-form">
          {!isAuthenticated && <Login errorMessage={errorMessage} onLoginClick={creds => dispatch(loginUser(creds))}/>}
          {isAuthenticated && <Logout onLogoutClick={() => dispatch(logoutUser())}/>}
        </div>
      </div>
    </nav>)
  }
}

// Navbar.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool.isRequired,
//   errorMessage: PropTypes.string
// }
export default Navbar;