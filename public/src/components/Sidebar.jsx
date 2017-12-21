import NewFavoriteItem from './NewFavoriteItem.jsx';

let Sidebar = (props) => {

  render() {

    return (<div>
      <aside id="sidenav" className="column is-1 is-narrow-mobile section" style={sideStyle}>
        <a href="javascript:void(0)" className="closebtn" style={closebtnStyle} onClick={() => this.closeNav()}>&times;</a>
        <p className="menu-label is-hidden-touch">Navigation</p>
        <ul className="menu-list">
          <li>
            <a href="#" className="">
              {profilePhoto}
            </a>
          </li>
          <li>
            <a href="#" className="">
            <span className="icon"><i className="fa fa-table"></i></span> Links
            </a>
          </li>
          <li>
            <a href="#" className="">
            <span className="icon"><i className="fa fa-info"></i>
              {props.favorites.map((favorite, key) => (
                <FavoriteItem
                  key={favorite.searchQuery}
                  index={key}
                  favorite={favorite}
                  username={props.username}
                  removeFavorite={props.removeFavorite}
                />
              ))}</span>
             </a>
          </li>
        </ul>
       </aside>
       <a className ="button is-info" onClick={() => this.openNav()}><i className="fa fa-circle-o-notch" aria-hidden="true"></i></a>
    </div>)
  }
}

export default Sidebar;