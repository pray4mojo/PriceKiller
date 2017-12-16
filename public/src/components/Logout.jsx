import React, { Component, PropTypes } from 'react';

class Logout extends Component {
  render() {
    console.log('props in logout', this.props);
    const { onLogoutClick } =this.props;
    return (<button onClick={() => onLogoutClick()} className="button is-light">Logout</button>)
  }
}

// Logout.propTypes = {
//   onLogoutClick: PropTypes.func.isRequired
// };

export default Logout;