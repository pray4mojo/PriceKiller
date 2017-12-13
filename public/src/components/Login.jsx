import React, { Component, PropTypes } from 'react';

class Login extends Component {
  handleClick(event) {
    const username = this.refs.username;
    const password = this.refs.password;
    const creds = { username: username.value.trim(), password: password.value.trim() };
    this.props.onLoginClick(creds);
    console.log('creds', creds);
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
    return (<div>
      <input type="text" ref="username" className="form-control" placeholder="Username" />
      <input type="text" ref="password" className="form-control" placeholder="Password" />
      <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">Login</button>
      <button onClick={(event) => this.handleGoogleClick(event)} className="btn btn-primary">Login with Google</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>)
  }
}

// Login.propTypes = {
  // onLoginClick: PropTypes.func.isRequired,
  // errorMessage: PropTypes.string
// }

export default Login;