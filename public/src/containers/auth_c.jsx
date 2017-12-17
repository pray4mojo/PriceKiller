import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login, loginUser, logoutUser, signupUser, doAuthentication } from '../actions/auth_a.jsx';
import Navbar from '../components/Navbar.jsx';


class auth extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage  } = this.props;
    console.log('this.props', this.props)
    return (<div>
      <Navbar isAuthenticated={isAuthenticated}
        errorMessage={errorMessage}
        dispatch={dispatch} />
    </div>)
  }
}

const mapStateToProps = (state) => {
  console.log('state in container', state);
  return {
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => { 
  console.log('dispatch in container', dispatch); 
  return { 
    doAuthentication: () => {dispatch(doAuthentication())}, 
    login: () => {dispatch(login())}, 
    loginUser: () => {dispatch(loginUser())}, 
    logoutUser: () => {dispatch(logoutUser())}, 
    signupUser: () => {dispatch(signupUser())} 
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(auth);

// Auth_c.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   quote: PropTypes.string,
//   isAuthenticated: PropTypes.bool.isRequired,
//   errorMessage: PropTypes.string,
//   isSecretQuote: PropTypes.bool.isRequired
// }

