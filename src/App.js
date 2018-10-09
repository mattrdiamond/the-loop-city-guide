import React, { Component } from 'react';
import NavBar from './components/NavBar';
// import SideBar from './components/SideBar';
import Map from './components/Map';
import FoursquareAPI from './API/';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryvalue: '',
      venues: [],
      markers: [],
      center: [],
      zoom: 12
    };

    this.initMap = this.initMap.bind(this);
    this.filterMarkers = this.filterMarkers.bind(this);
  }

  componentDidMount() {
    // test to access child method
    this.accessChild();

    FoursquareAPI.search({
      near: 'Chicago, IL',
      query: 'records',
      limit: 10
    }).then((results) => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map((venue) => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          name: venue.name,
          isOpen: false, //remove
          isVisible: true, // remove
          id: venue.id
        };
      });
      console.log(markers);
      // Update state with Foursquare data and pass renderMap as callback
      this.setState({ venues, center, markers }, this.renderMap());
    });
  }

  // test to access child method
  accessChild = () => {
    this.refs.child.propsTest();
  };

  renderMap() {
    loadMapScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCHE01dQ6hdkOBP0qxkzYdTCJdhYesX8gY&callback=initMap'
    );
    window.initMap = this.initMap;
    console.log('map script tag loaded');
  }

  // initMap() {
  //   // Create A Map
  //   const map = new window.google.maps.Map(document.getElementById('map'), {
  //     center: this.state.center,
  //     zoom: this.state.zoom
  //   });

  //   // Create single InfoWindow
  //   const infowindow = new window.google.maps.InfoWindow();

  //   // Array to hold markers
  //   const markerArray = [];

  //   // Generate content for infoWindow
  //   this.state.markers.map((marker) => {
  //     // Create A Marker
  //     const newMarker = new window.google.maps.Marker({
  //       position: {
  //         lat: marker.lat,
  //         lng: marker.lng
  //       },
  //       map: map,
  //       title: marker.name,
  //       animation: window.google.maps.Animation.DROP
  //     });

  //     // Add listener to marker
  //     newMarker.addListener('click', () => {
  //       // find venue that matches clicked marker
  //       const clickedVenue = this.state.venues.find((venue) => venue.id === marker.id);

  //       FoursquareAPI.getVenueDetails(marker.id)
  //         .then((res) => {
  //           //get venue details from foursquare and copy them to clickedVenue
  //           const venueDetails = Object.assign(clickedVenue, res.response.venue);
  //           // copy venueDetails object and append to state.venues
  //           this.setState({ venues: Object.assign(this.state.venues, venueDetails) });
  //           return venueDetails;
  //         })
  //         .then(() => {
  //           // check if venue contains a photo
  //           const venuePhoto = clickedVenue.bestPhoto
  //             ? '<img src="' +
  //               clickedVenue.bestPhoto.prefix +
  //               '100x100' +
  //               clickedVenue.bestPhoto.suffix +
  //               '" alt="An image of ${venue.name}" />'
  //             : '';

  //           const contentString = `<div class="venue-info">
  //           <p>${clickedVenue.name}</p>
  //           ${venuePhoto}
  //           </div>`;

  //           infowindow.setContent(contentString);
  //           infowindow.open(map, marker);
  //         });
  //     });

  //     markerArray.push(marker);
  //   });
  //   this.setState({ markers: markerArray });
  //   console.log(this.state.markers);
  // }
  initMap() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.center,
      zoom: this.state.zoom
    });

    // Create single InfoWindow
    const infowindow = new window.google.maps.InfoWindow();

    this.state.venues.map((venue) => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        },
        map: map,
        title: venue.name,
        animation: window.google.maps.Animation.DROP
      });

      // Add listener to marker
      marker.addListener('click', () => {
        this.toggleBounce(marker);

        // find venue that matches clicked marker
        const clickedVenue = this.state.venues.find((marker) => marker.id === venue.id);

        FoursquareAPI.getVenueDetails(venue.id)
          .then((res) => {
            //get venue details from foursquare and copy them to clickedVenue
            const venueDetails = Object.assign(clickedVenue, res.response.venue);
            // copy venueDetails object and append to state.venues
            this.setState({ venues: Object.assign(this.state.venues, venueDetails) });
            return venueDetails;
          })
          .then(() => {
            // Generate content for infoWindow
            const venuePhoto = venue.bestPhoto
              ? '<img src="' +
                venue.bestPhoto.prefix +
                '100x100' +
                venue.bestPhoto.suffix +
                '" alt="An image of ${venue.name}" />'
              : '';

            const contentString = `<div class="venue-info">
            <p>${venue.name}</p>
            ${venuePhoto}
            </div>`;

            infowindow.setContent(contentString);
            infowindow.open(map, marker);
          });
      });
    });
  }

  toggleBounce(marker) {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(window.google.maps.Animation.BOUNCE);
    }
    setTimeout(() => {
      marker.setAnimation(null);
    }, 1000);
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

  accessMapComponent() {
    this.refs.child.renderMap();
  }

  render() {
    return (
      <div id="app-container">
        <NavBar />
        {/* <SideBar
          venues={this.state.venues}
          queryValue={this.state.queryValue}
          filterMarkers={this.filterMarkers}
        /> */}
        <Map venues={this.state.venues} ref="child" />
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
