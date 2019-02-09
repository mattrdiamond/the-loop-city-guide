import React from 'react';

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
