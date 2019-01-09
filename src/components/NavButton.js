import React, { Component } from 'react';

class NavButton extends Component {
  render() {
    let buttonState = 'closed';

    if (this.props.sidebarOpen) {
      buttonState = 'open';
    }

    return (
      <button
        id="nav-button"
        className={'hamburger--vortex ' + buttonState}
        onMouseDown={this.props.toggleSidebar}
        onKeyPress={this.props.navKeyPress}
        type="button"
        aria-label="Show/hide venue sidebar"
        aria-controls="venue-sidebar"
        aria-haspopup="true"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    );
  }
}

export default NavButton;
