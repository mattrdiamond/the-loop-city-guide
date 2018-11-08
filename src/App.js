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
      venues: [],
      markers: [],
      center: [],
      zoom: 12,
      infoWindow: '',
      sidebarOpen: false,
      updateSuperState: (obj) => {
        this.setState(obj);
      }
    };
    this.initMap = this.initMap.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.navKeyPress = this.navKeyPress.bind(this);
    this.updateMapBounds = this.updateMapBounds.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.listItemKeyPress = this.listItemKeyPress.bind(this);
  }

  componentDidMount() {
    // Fetch restaurant data from Foursquare
    FoursquareAPI.search({
      near: 'Chicago, IL',
      query: 'museum',
      limit: 10
    })
      .then((results) => {
        const { venues } = results.response;
        const { center } = results.response.geocode.feature.geometry;
        this.setState({ venues, center });
        this.renderMap();
      })
      .catch((error) => {
        alert('Error: Failed to fetch Foursquare Data');
      });
  }

  renderMap() {
    const API_KEY = 'AIzaSyCHE01dQ6hdkOBP0qxkzYdTCJdhYesX8gY';
    loadMapScript(
      `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`
    );
    window.initMap = this.initMap;
  }

  initMap() {
    // Create empty LatLngBounds object
    this.bounds = new window.google.maps.LatLngBounds();

    // Load map
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.center,
      zoom: this.state.zoom
    });

    // Create single InfoWindow
    const infowindow = new window.google.maps.InfoWindow();
    this.setState({ infoWindow: infowindow });

    // Create marker for each venue
    this.state.venues.map((venue) => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        },
        id: venue.id,
        map: this.map,
        title: venue.name,
        animation: window.google.maps.Animation.DROP
      });

      this.state.markers.push(marker);

      // Extend the bounds to include each marker's position
      this.bounds.extend(marker.position);

      marker.addListener('click', () => {
        // Animate marker
        this.toggleBounce(marker);

        // Find venue that matches clicked marker
        const clickedVenue = this.state.venues.find((marker) => marker.id === venue.id);

        FoursquareAPI.getVenueDetails(venue.id)
          .then((res) => {
            //Get venue details from foursquare and copy them to clickedVenue
            const venueDetails = Object.assign(clickedVenue, res.response.venue);

            // Copy venueDetails object and append to venues
            this.setState({ venues: Object.assign(this.state.venues, venueDetails) });

            // Use photo if available. Otherwise set as empty string
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

            // Set infowindow content and open
            infowindow.setContent(contentString);
            infowindow.open(this.map, marker);
          })
          .catch((error) => {
            alert('Error: Failed to fetch Foursquare Data');
          });
      });
    });
    // fit the map to the newly inclusive bounds
    this.map.fitBounds(this.bounds);
  }

  handleListItemClick(venue) {
    const clickedMarker = this.state.markers.find((marker) => marker.id === venue.id);
    window.google.maps.event.trigger(clickedMarker, 'click');

    if (window.innerWidth < 600) {
      this.toggleSidebar();
    }
  }

  listItemKeyPress(e, venue) {
    let code = e.keyCode || e.which;

    if (code === 13) {
      this.handleListItemClick(venue);
    }
  }

  // update map zoom level if the data has changed
  componentDidUpdate(prevProps, prevState) {
    if (prevState.zoom !== this.state.zoom) {
      this.map.setZoom(this.state.zoom);
    }
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

  navKeyPress(e) {
    let code = e.keyCode || e.which;

    if (code === 13) {
      this.toggleSidebar();
    }
  }

  toggleSidebar() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  closeSidebar() {
    this.setState({ sidebarOpen: false });
  }

  updateMapBounds(visibleMarkers) {
    let newBounds = new window.google.maps.LatLngBounds();
    visibleMarkers.forEach((marker) => newBounds.extend(marker.position));
    this.map.fitBounds(newBounds);

    // set max zoom level
    let zoomLevel = this.map.getZoom();
    if (zoomLevel > 15) {
      zoomLevel = 15;

      // open infoWindow if map contains a single marker
      if (visibleMarkers.length === 1) {
        window.google.maps.event.trigger(visibleMarkers[0], 'click');
      }
    }
    this.setState({ zoom: zoomLevel });
  }

  render() {
    return (
      <div id="app-container">
        <NavBar
          toggleSidebar={this.toggleSidebar}
          sidebarOpen={this.state.sidebarOpen}
          navKeyPress={this.navKeyPress}
        />
        <SideBar
          handleListItemClick={this.handleListItemClick}
          venues={this.state.venues}
          markers={this.state.markers}
          updateSuperState={this.state.updateSuperState}
          infoWindow={this.state.infoWindow}
          sidebarOpen={this.state.sidebarOpen}
          updateMapBounds={this.updateMapBounds}
          listItemKeyPress={this.listItemKeyPress}
        />
        <Map closeSidebar={this.closeSidebar} />
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
  script.onerror = () => alert('Unable to load Google Maps');
  index.parentNode.insertBefore(script, index);
};

export default App;
