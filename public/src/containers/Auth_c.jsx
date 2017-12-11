import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { loginUser, logoutUser } from '../actions/Login_a.jsx';
import Navbar from '../components/Navbar.jsx';
// import Quotes from '../components/Quotes.jsx';

class auth extends Component {
  render() {
    // console.log('this.props', this.props)
    const { dispatch, isAuthenticated, errorMessage  } = this.props;
    // console.log('isAuth', isAuthenticated);
    return (<div>
      <Navbar isAuthenticated={isAuthenticated}
        errorMessage={errorMessage}
        dispatch={dispatch} />
    </div>)
  }
}

// Auth_c.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   quote: PropTypes.string,
//   isAuthenticated: PropTypes.bool.isRequired,
//   errorMessage: PropTypes.string,
//   isSecretQuote: PropTypes.bool.isRequired
// }

const mapStateToProps = (state) => {
  // console.log('state in container', state);
  return {
    // quote,
    // isSecretQuote: authenticated,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage
  }
}

export default connect(mapStateToProps)(auth);

// <div className="container">
        // <Quotes onQuoteClick={() => dispatch(fetchQuote())}
          // onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
          // isAuthenticated={isAuthenticated} quote={quote}
          // isSecretQuote={isSecretQuote}/>
      // </div>
