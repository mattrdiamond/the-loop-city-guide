import React, { Component } from 'react';

class ArrowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleButton() {
    this.setState({ open: !this.state.open });
  }

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
        aria-label="Venues"
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

export default ArrowButton;
