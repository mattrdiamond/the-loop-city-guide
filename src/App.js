import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Map from './components/Map';
import SquareAPI from './API/';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryValue: '',
      venues: [],
      markers: []
    };

    this.initMap = this.initMap.bind(this);
    this.filterMarkers = this.filterMarkers.bind(this);
  }

  componentDidMount() {
    // this.getVenues();
    SquareAPI.search({
      near: 'Chicago, IL',
      query: 'tacos',
      limit: 10
    }).then((results) => console.log(results));
  }

  renderMap() {
    loadMapScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCHE01dQ6hdkOBP0qxkzYdTCJdhYesX8gY&callback=initMap'
    );
    window.initMap = this.initMap;
  }

  getVenues() {
    // include "?" at end of url to append query string
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?';
    const parameters = {
      client_id: 'HJNNIPI2LLUFNMLQNWRVAJOELZVHCP02VCSIEKK4XNIIS1CB',
      client_secret: 'YTE4A4QEZH0FMUFOWYRLVVPIJX3L0XW3D2K1GJ0GRMWAT2PV',
      query: 'record store',
      near: 'Chicago',
      v: '20180929'
    };

    // URLSearchParams will add parameters to url using query strings
    fetch(endPoint + new URLSearchParams(parameters))
      .then((response) => response.json())
      .then((data) => {
        // Pass renderMap as callback after loading dynamic Foursquare data into state
        this.setState(
          {
            venues: data.response.groups[0].items
          },
          this.renderMap()
        );
      })
      .catch((error) => {
        console.log('Error: ' + error);
      });
  }

  initMap() {
    // Create A Map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 41.9, lng: -87.629 },
      zoom: 12
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

  // Filter map markers
  filterMarkers(query) {
    this.state.markers.forEach((marker) => {
      marker.title.toLowerCase().includes(query.trim())
        ? marker.setVisible(true)
        : marker.setVisible(false);
    });
    this.setState({
      queryValue: query.trim()
    });
  }

  render() {
    return (
      <div id="app-container">
        <NavBar />
        <SideBar
          venues={this.state.venues}
          queryValue={this.state.queryValue}
          filterMarkers={this.filterMarkers}
        />
        <Map />
      </div>
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

export default App;
