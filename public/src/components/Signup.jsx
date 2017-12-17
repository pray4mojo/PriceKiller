import React, { Component, PropTypes } from 'react';

class Signup extends Component {
  handleClick(event) {
    const username = this.refs.username;
    const password = this.refs.password;
    const creds = { username: username.value.trim(), password: password.value.trim() };
    this.props.onSignupClick(creds);
    console.log('creds', creds);
    // this.props.onGoogleSignupClick(creds);
  }

  render() {
    const { errorMessage } = this.props;
    return (
      <div className="card">
        <div className="card-content">
          <header className="card-header">
          <p className="card-header-title">
            Signup
          </p>
          </header>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input type="text" className="input" placeholder="Enter Username"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input type="text" className="input" placeholder="Enter Password"/>
            </div>
          </div>
          <div className="field is-grouped is-grouped-right">
            <p className="control">
              <button class="button is-info" onClick={(event) => this.handleClick(event)}>Signup</button>
              {errorMessage && <p>{errorMessage}</p>}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

// Signup.propTypes = {
  // onLoginClick: PropTypes.func.isRequired,
  // errorMessage: PropTypes.string
// }

export default Signup;