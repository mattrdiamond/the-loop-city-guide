import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
  }

  handleCloseSidebar() {
    if (window.innerWidth < 600) {
      this.props.closeSidebar();
    }
  }

  render() {
    return (
      <main>
        <div
          role="application"
          aria-hidden="true"
          id="map"
          onClick={this.handleCloseSidebar}
        />
      </main>
    );
  }
}

export default Map;
