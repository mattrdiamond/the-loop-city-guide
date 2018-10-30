import React, { Component } from 'react';
import NavButton from './NavButton';

class NavBar extends Component {
  render() {
    return (
      <nav id="navbar">
        <NavButton
          handleMouseDown={this.props.handleMouseDown}
          sidebarOpen={this.props.sidebarOpen}
        />
        <h1 className="site-title">Neighborhood Map</h1>
      </nav>
    );
  }
}

export default NavBar;
