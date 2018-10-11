import React, { Component } from 'react';

class Map extends Component {
  // componentDidMount() {
  //   this.renderMap();
  // }

  propsTest() {
    console.log('props called');
  }

  render() {
    return (
      <main>
        <div role="application" aria-hidden="true" id="map" {...this.props} />
      </main>
    );
  }
}

export default Map;
