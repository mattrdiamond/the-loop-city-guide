import React, { Component } from 'react';

class NavButton extends Component {
  render() {
    let buttonState = 'closed';
    console.log('sidebar', this.props.sidebarOpen);

    if (this.props.sidebarOpen) {
      console.log('sidebar', this.props.sidebarOpen);
      buttonState = 'open';
    }

    return (
      <button
        id="nav-button"
        className={'hamburger--vortex ' + buttonState}
        onMouseDown={this.props.handleMouseDown}
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    );
  }
}

export default NavButton;
