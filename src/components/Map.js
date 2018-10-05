import React, { Component } from 'react';

class Map extends Component {
  // componentDidMount() {
  //   this.renderMap();
  // }

  renderMap() {
    loadMapScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCHE01dQ6hdkOBP0qxkzYdTCJdhYesX8gY&callback=initMap'
    );
    window.initMap = this.initMap;
  }

  initMap() {
    // Create A Map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.props.center,
      zoom: this.props.zoom
    });

    // Create single InfoWindow
    const infowindow = new window.google.maps.InfoWindow();

    // Array to hold markers
    const markerArray = [];

    // Generate content for infoWindow
    this.state.venues.map((place) => {
      // const contentString = `${place.venue.name}`;
      const contentString =
        '<div class="venue-info">' +
        '<h4>Venue Name</h4>' +
        '<p>' +
        place.venue.name +
        '</p>' +
        '</div>';

      // Create A Marker
      const marker = new window.google.maps.Marker({
        position: {
          lat: place.venue.location.lat,
          lng: place.venue.location.lng
        },
        map: map,
        title: place.venue.name,
        animation: window.google.maps.Animation.DROP
      });

      // Add listener to marker
      marker.addListener('click', () => {
        // Update the content for clicked marker
        infowindow.setContent(contentString);
        // Open An InfoWindow
        infowindow.open(map, marker);
      });

      markerArray.push(marker);
    });
    this.setState({ markers: markerArray });
  }

  render() {
    return (
      <main>
        <div role="application" aria-hidden="true" id="map" />
      </main>
    );
  }
}

// Load google maps asynchronously
// Create Google Maps script tag and insert it before all other script tags
const loadMapScript = (url) => {
  const index = window.document.getElementsByTagName('script')[0];
  const script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
};

export default Map;
