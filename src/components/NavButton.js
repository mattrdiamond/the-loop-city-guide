import React, { Component } from 'react';

class NavButton extends Component {
  render() {
    const { sidebarOpen } = this.props;
    const buttonState = sidebarOpen ? 'open' : 'closed';

    return (
      <button
        id="nav-button"
        className={'hamburger--vortex ' + buttonState}
        onMouseDown={this.props.toggleSidebar}
        onKeyPress={this.props.navKeyPress}
        type="button"
        aria-label={(sidebarOpen ? 'Hide' : 'Show') + ' venue sidebar'}
        aria-controls="venue-sidebar"
        aria-haspopup="true"
      >
        <span className={'hamburger-box ' + buttonState}>
          {/*<span className="hamburger-inner" />*/}
          <span className="hamburger-top" />
          <span className="hamburger-middle" />
          <span className="hamburger-bottom" />
        </span>
      </button>
    );
  }
}

export default NavButton;
