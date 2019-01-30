import React, { Component, PureComponent } from 'react';
// import React from 'react';
import NavButton from './NavButton';
import SearchButton from './SearchButton';

// PureComponent handles shouldComponentUpdate for you
class NavBar extends PureComponent {
  constructor() {
    super();
    this.state = { showInput: false };
    this.toggleInput = this.toggleInput.bind(this);
  }

  toggleInput() {
    this.setState({ showInput: !this.state.showInput });
  }

  render() {
    const inputStatus = this.state.showInput ? 'visible' : 'hidden';
    console.log('render navBar');
    return (
      <nav id="navbar">
        <div className="nav-top">
          <SearchButton showInput={this.state.showInput} toggleInput={this.toggleInput} />
        </div>
        <div className={'input-container ' + inputStatus}>
          <input
            id="search-input"
            type="text"
            placeholder="Search..."
            onChange={this.props.handleFilterMarkers}
          />
          <span className="input-caption">Type to filter venues</span>
        </div>
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
