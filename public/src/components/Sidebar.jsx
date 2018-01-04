import React from 'react';
import { connect } from 'react-redux';
import Favorites from './Favorites.js';

const style = {
  sidebar: {
      // height: '100%',
      // borderStyle: 'solid',
      // borderWidth: 'medium',
      borderColor: 'black',
      width: 0,
      position: 'absolute',
      zIndex: 1,
      // top: 0,
      // left: 0,
      backgroundColor: 'white',
      overflowX: 'hidden',
      padding: '0px',
      transition: '0.5s',
      opacity: 1
  },
  closebtn: {
    // fontSize: '36px',
    // marginLeft: '-20px'
  },
  profilePhoto: {
    borderRadius: '50%'
  }
}

const Sidebar = (props) => {
  let list;
  let name = localStorage.profile ? JSON.parse(localStorage.profile).given_name : null;
  let profilePhoto = localStorage.profile ? <img className="image is-128x128" style={style.profilePhoto} src={JSON.parse(localStorage.profile).picture} /> : null;

  const toggleNav = () => {
    document.getElementById("sidenav").style.width = document.getElementById("sidenav").style.width === '100%' ? 0 : '100%';
  }

  if (props.sidebar.favorites) {
    if (props.sidebar.favorites.length === 0) {
      list = (
        <div>
          <header>No Stored Favorites</header>
        </div>
      );
    } else {
      list = (
        <Favorites />
      );
    }
  }

  return (
    <div>
      <a className ="button is-1 is-info" style={style.closebtn}onClick={() => toggleNav()}><i className="fa fa-circle-o-notch" aria-hidden="true"></i></a>
      <div id="sidenav" className="card column is-1 is-narrow-mobile section" style={style.sidebar}>
        <p className="menu-label is-hidden-touch">Navigation</p>
            <a className="">
              <h3>Hello, {name}</h3>
              {profilePhoto}
            </a>
          <ul className="menu-list">
            <li>
              {list}
            </li>
            <li className ="button is-1 is-info fa fa-sign-out" aria-hidden="true"
              onClick={() => {props.sidebar.auth.logout(); window.location.reload();}}></li>
        </ul>
       </div>
  </div>
  )
}

export default Sidebar;