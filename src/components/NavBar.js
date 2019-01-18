import React, { Component } from 'react';
// import React from 'react';
import NavButton from './NavButton';

class NavBar extends Component {

  render() {
    return (
      <nav id="navbar">
        <NavButton
          toggleSidebar={this.props.toggleSidebar}
          sidebarOpen={this.props.sidebarOpen}
          navKeyPress={this.props.navKeyPress}
        />
        <input
          id="search-input"
          type="text"
          placeholder="Filter"
          onChange={this.props.handleFilterMarkers}
        />
      </nav>
    );
  }
}

export default NavBar;

// const NavBar = ({ toggleSidebar, sidebarOpen, navKeyPress }) => (
//   <nav id="navbar">
//     <input
//       id="search-input"
//       type="text"
//       placeholder="Filter"
//       onChange={this.props.handleFilterMarkers()}
//     />
//     <NavButton
//       toggleSidebar={toggleSidebar}
//       sidebarOpen={sidebarOpen}
//       navKeyPress={navKeyPress}
//     />
//     <h1 className="site-title">Placeholder Text</h1>
//   </nav>
// );

// export default NavBar;
