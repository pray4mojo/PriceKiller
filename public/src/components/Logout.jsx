import React, { Component, PropTypes } from 'react';

class Logout extends Component {
  render() {
    console.log('props in logout', this.props);
    const { onLogoutClick } =this.props;
    return (<button onClick={() => onLogoutClick()} className="btn btn-primary">Logout</button>)
  }
}

// Logout.propTypes = {
//   onLogoutClick: PropTypes.func.isRequired
// };

export default Logout;