import React, { Component } from 'react';

class NavBar extends Component {
  toggleSidebar() {}

  render() {
    return (
      <nav id="navbar">
        {/* add keypress for accessibility */}
        <span className="hamburger-menu" onClick={this.toggleSidebar} />
        <h1 className="site-title">Neighborhood Map</h1>
      </nav>
    );
  }
}

export default NavBar;
