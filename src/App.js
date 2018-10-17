import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
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
      zoom: 12,
      updateSuperState: (obj) => {
        this.setState(obj);
      }
    };
    this.initMap = this.initMap.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  componentDidMount() {
    // fetch restaurant data from Foursquare
    FoursquareAPI.search({
      near: 'Chicago, IL',
      query: 'coffee',
      limit: 10
    }).then((results) => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      this.setState({ venues, center });
      this.renderMap();
    });
  }

  // componentDidMount() {
  //   // fetch restaurant data from Foursquare
  //   FoursquareAPI.search({
  //     near: 'Chicago, IL',
  //     query: 'coffee',
  //     limit: 10
  //   })
  //     .then((results) => {
  //       const { venues } = results.response;
  //       const { center } = results.response.geocode.feature.geometry;
  //       this.setState({ venues, center });
  //       this.renderMap();
  //       return venues;
  //     })
  //     .then((venues) => {
  //       const venueDetails = [];
  //       venues.forEach((venue) => {
  //         FoursquareAPI.getVenueDetails(venue.id).then((results) => {
  //           // const venueDetails = [results.response.venue];
  //           venueDetails.push(results.response.venue);
  //           // copy and merge venue details with state value
  //           this.setState({ venues: Object.assign(this.state.venues, venueDetails) });
  //           console.log(venueDetails);
  //         });
  //       });
  //     });
  // }

  renderMap() {
    loadMapScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCHE01dQ6hdkOBP0qxkzYdTCJdhYesX8gY&callback=initMap'
    );
    window.initMap = this.initMap;
    console.log('loaded map script');
  }

  initMap() {
    // load map
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
        id: venue.id,
        map: map,
        title: venue.name,
        animation: window.google.maps.Animation.DROP
      });

      this.state.markers.push(marker);

      marker.addListener('click', () => {
        // animate marker
        this.toggleBounce(marker);

        // find venue that matches clicked marker
        const clickedVenue = this.state.venues.find((marker) => marker.id === venue.id);

        FoursquareAPI.getVenueDetails(venue.id)
          .then((res) => {
            //get venue details from foursquare and copy them to clickedVenue
            const venueDetails = Object.assign(clickedVenue, res.response.venue);
            // copy venueDetails object and append to state.venues
            this.setState({ venues: Object.assign(this.state.venues, venueDetails) });
          })
          .then(() => {
            // use photo if available. otherwise set as empty string
            const venuePhoto = venue.bestPhoto
              ? '<img src="' +
                venue.bestPhoto.prefix +
                '100x100' +
                venue.bestPhoto.suffix +
                '" alt="An image of ' +
                venue.name +
                '" />'
              : '';

            // Generate content for infoWindow
            const contentString = `<React.Fragment>
              <p>${venue.name}</p>
              ${venuePhoto}
              </React.Fragment>`;

            infowindow.setContent(contentString);

            // open infowindow
            infowindow.open(map, marker);
          });
      });
    });
    console.log('inititialized map and markers');
  }

  handleListItemClick(venue) {
    const clickedMarker = this.state.markers.find((marker) => marker.id === venue.id);
    window.google.maps.event.trigger(clickedMarker, 'click');
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

  render() {
    return (
      <div id="app-container">
        <NavBar />
        <SideBar
          handleListItemClick={this.handleListItemClick}
          venues={this.state.venues}
          markers={this.state.markers}
          updateSuperState={this.state.updateSuperState}
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
