import React, { Component } from 'react';
// import React from 'react';
import NavButton from './NavButton';
import SearchButton from './SearchButton';

class NavBar extends Component {
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

    return (
      <React.Fragment>
        <nav id="navbar">
          <div className="nav-top">
            <NavButton
              toggleSidebar={this.props.toggleSidebar}
              sidebarOpen={this.props.sidebarOpen}
              navKeyPress={this.props.navKeyPress}
            />
            <SearchButton
              showInput={this.state.showInput}
              toggleInput={this.toggleInput}
            />
          </div>
          <div className={'input-container ' + inputStatus}>
            <input
              id="search-input"
              type="text"
              placeholder="Search"
              onChange={this.props.handleFilterMarkers}
            />
            <span className="input-caption">Type to filter venues</span>
          </div>
        </nav>
      </React.Fragment>
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
