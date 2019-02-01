// import React, { Component } from 'react';
import React from 'react';

// class NavButton extends Component {
//   constructor() {
//     super();
//     this.state = { isOpen: true };
//     this.toggleButton = this.toggleButton.bind(this);
//   }

//   toggleButton() {
//     // const matchSidebar = sidebarOpen ? true : false;
//     this.props.toggleSidebar();
//     this.setState({ isOpen: this.props.sidebarOpen ? true : false });
//   }

//   render() {
//     const { sidebarOpen } = this.props;
//     const buttonState = sidebarOpen ? 'open' : 'closed';
//     console.log('render navButton');

//     return (
//       <button
//         id="nav-button"
//         className={'hamburger--vortex ' + buttonState}
//         onMouseDown={this.toggleButton}
//         onKeyPress={this.props.navKeyPress}
//         type="button"
//         aria-label={(sidebarOpen ? 'Hide' : 'Show') + ' venue sidebar'}
//         aria-controls="venue-sidebar"
//         aria-haspopup="true"
//       >
//         <span className={'hamburger-box ' + buttonState}>
//           {/*<span className="hamburger-inner" />*/}
//           <span className="hamburger-top" />
//           <span className="hamburger-middle" />
//           <span className="hamburger-bottom" />
//         </span>
//       </button>
//     );
//   }
// }

// export default NavButton;

const NavButton = ({ sidebarOpen, toggleSidebar, navKeyPress }) => {
  const isOpen = sidebarOpen ? ' open' : ' closed';
  return (
    <button
      id="nav-button"
      className={'hamburger--vortex' + isOpen}
      onMouseDown={toggleSidebar}
      onKeyPress={navKeyPress}
      type="button"
      aria-label={(sidebarOpen ? 'Hide' : 'Show') + ' venue sidebar'}
      aria-controls="venue-sidebar"
      aria-haspopup="true"
    >
      <span className={'hamburger-box' + isOpen}>
        <span className="hamburger-top" />
        <span className="hamburger-middle" />
        <span className="hamburger-bottom" />
      </span>
    </button>
  );
};

export default NavButton;
