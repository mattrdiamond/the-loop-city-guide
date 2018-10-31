import React, { Component } from 'react';
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
        <h1 className="site-title">Neighborhood Map</h1>
      </nav>
    );
  }
}

export default NavBar;
