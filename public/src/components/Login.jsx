import React, { Component, PropTypes } from 'react';

class Login extends Component {
  handleClick(event) {
    const username = this.refs.username;
    const password = this.refs.password;
    const creds = { username: username.value.trim(), password: password.value.trim() };
    this.props.onLoginClick(creds);
    // this.props.onGoogleLoginClick(creds);
  }

  // handleGoogleClick(event) {
  //   const username = this.refs.username;
  //   const password = this.refs.password;
  //   const creds = { username: username.value.trim(),
  //   this.props.onGoogleLoginClick(creds);
  // }

  render() {
    const { errorMessage } = this.props;
    return (
        <div className="card">
          <div className="card-content">
            <label htmlFor="" className="label is-large">Login</label>
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
              <p class="control">
                <button className="button is-info" onClick={(event) => this.handleClick(event)}>Login</button>
              </p>
              <p className="control">
                <button className="button is-info" onClick={(event) => this.handleGoogleClick(event)}>
                  Login with Google
                </button>
                {errorMessage && <p>{errorMessage}</p>}
              </p>
            </div>
          </div>
        </div>
    )
  }
}

// Login.propTypes = {
  // onLoginClick: PropTypes.func.isRequired,
  // errorMessage: PropTypes.string
// }

export default Login;