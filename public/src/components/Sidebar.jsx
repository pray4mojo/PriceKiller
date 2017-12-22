import React from 'react';
import { connect } from 'react-redux';
// import NewFavoriteItem from './NewFavoriteItem.jsx';

const style = {
  sidebar: {
      height: '100%', /* 100% Full-height */
      width: 0, /* 0 width - change this with JavaScript */
      position: 'relative', /* Stay in place */
      zIndex: 1, /* Stay on top */
      top: 0, /* Stay at the top */
      left: 0,
      // backgroundColor: 'hsl(204, 86%, 53%)',
      backgroundColor: 'white',
      overflowX: 'hidden', /* Disable horizontal scroll */
      padding: 0, /* Place content 60px from the top */
      transition: '0.5s', /* 0.5 second transition effect to slide in the sidenav */
      opacity: 1,
      padding: '5px',
      borderWidth: '2px',
      borderColor: 'hsl(204, 86%, 53%)'
  },
  closebtn: {
    position: 'fixed',
    top: 0,
    right: '25px',
    fontSize: '36px',
    marginLeft: '50px'
  },
  profilePhoto: {
    borderRadius: '50%'
  },
  card: {

  }
}

let Sidebar = (props) => {
  let list;
  let profilePhoto = localStorage.profile ? <img className="image is-128x128" style={style.profilePhoto} src={JSON.parse(localStorage.profile).picture} /> : null;

  const toggleNav = () => {
    document.getElementById("sidenav").style.width = document.getElementById("sidenav").style.width === '250px' ? 0 : '250px';
  }

  // const closeNav = () => {
  //   document.getElementById('sidenav').style.width = '0';
  // }


  if (props.favorites) {
    if (props.favorites.length === 0) {
      list = (
        <div>
          <header>No Stored Favorites</header>
        </div>
      );
    } else {
      list = (
        <div>
          <header>Favorites </header>
            <ul className="menu-list">
              {props.favorites.favorites.map((favorite) => <li>{favorite.searchQuery}</li>)}
            </ul>
        </div>
      );
    }
  }

  return (
    <div>
    <a className ="button is-info" onClick={() => toggleNav()}><i className="fa fa-circle-o-notch" aria-hidden="true"></i></a>
    <div id="sidenav" className="card column is-1 is-narrow-mobile section" style={style.sidebar}>
      <p className="menu-label is-hidden-touch">Navigation</p>
          <a className="">
            {profilePhoto}
          </a>
        <ul className="menu-list">
        <li>
          <a className="">{list}</a>
        </li>
      </ul>
     </div>
  </div>
  )
}

export default Sidebar;
// onClick={() => closeNav()}
<a href="javascript:void(0)" className="closebtn" style={style.closebtn} >&times;</a>