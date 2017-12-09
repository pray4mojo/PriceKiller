import { connect } from 'react-redux';
import { signupUser, loginUser, fetchQuote, fetchSecreteQuote } from '../actions/actions.jsx';
import Login from '../components/Login.jsx';
import Navbar from '../components/Navbar.jsx';
import Quotes from '../components/Quotes.jsx';

class Login_c extends Component {
  render() {
    const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.prop;
    return (<div>
      <Navbar isAuthenticated={isAuthenticated}
        errorMessage={errorMessage}
        dispatch={dispatch} />
      <div className="container">
        <Quotes onQuoteClick={() => dispatch(fetchQuote())}
          onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
          isAuthenticated={isAuthenticated} quote={quote}
          isSecretQuote={isSecretQuote}/>
      </div>
    </div>)
  }
}

Login_c.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quote: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isSecretQuote: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  const { quotes, auth } = state;
  const { quote, authenticated } = quotes;
  const { isAuthenticated, erroMessage } = auth;
  return {
    quotes,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps, /*mapDispatchToProps*/)(Login_c);
