import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Map from './components/Map';
import FoursquareAPI from './API/Foursquare';
import './App.css';
import LoadScreen from './components/LoadScreen';

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
      loading: false,
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

  // fetch restaurant details from Foursquare
  componentDidMount() {
    this.setState({ loading: true });
    // fetch restaurant data from Foursquare
    FoursquareAPI.search({
      near: 'Chicago, IL',
      query: 'restaurant',
      limit: 10
    })
      .then((results) => {
        const { venues } = results.response;
        const { center } = results.response.geocode.feature.geometry;
        this.fetchVenueDetails(venues, center);
        return venues;
      })
      .catch((error) => {
        alert('Error: Failed to fetch Foursquare Venues');
      });
  }

  fetchVenueDetails(venues, center) {
    // map through each venue and fetch venue details
    Promise.all(
      venues.map((venue) => {
        const venueData = FoursquareAPI.getVenueDetails(venue.id).then(
          (results) => results.response.venue
        );
        return venueData;
      })
    )
      .then((venueData) => {
        this.setState({ venues: venueData, center: center });
        console.log('1. fetch venue data');
      })
      .catch((error) => {
        alert('Error: Failed to fetch Foursquare Details');
      });
  }

  // componentDidUpdate - (update version of componentDidMount)
  // update map zoom level if the data has changed
  componentDidUpdate(prevProps, prevState) {
    if (prevState.zoom !== this.state.zoom) {
      this.map.setZoom(this.state.zoom);
    }
    if (prevState.venues !== this.state.venues) {
      this.initMap();
    }
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
    infowindow.id = '';

    // Create marker for each venue
    const markerArray = [];

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

      markerArray.push(marker);

      // Extend the bounds to include each marker's position
      this.bounds.extend(marker.position);

      marker.addListener('click', () => {
        console.log('marker clicked');
        // Animate marker
        this.toggleBounce(marker);

        // Add current marker id to infowindow
        infowindow.id = marker.id;

        // Find venue that matches clicked marker
        const clickedVenue = this.state.venues.find((marker) => marker.id === venue.id);

        // Use photo if available. Otherwise set as empty string
        const venuePhoto = clickedVenue.categories[0]
          ? '<img class="iw-photo" src="' +
            clickedVenue.categories[0].icon.prefix +
            '100' +
            clickedVenue.categories[0].icon.suffix +
            '" alt="' +
            clickedVenue.categories[0].icon.name +
            ' icon" />'
          : '';

        const getVenueHours = () => {
          if (venue.hasOwnProperty('hours')) {
            console.log('hours', venue.hours.status);
            return venue.hours.status;
          } else {
            console.log('no hours');
            return '';
          }
        };

        // Generate content for infoWindow
        const contentString = `<div id='iw-container'>
          ${venuePhoto}
          <div class="iw-content">
          <h4 class="iw-title">${venue.name}</h4>
          <ul class="iw-list>
          <li class="iw-address>${venue.location.address}</li>
          <li class="iw-hours">${getVenueHours()}</li>
          </ul>
          </div>
          </div>`;

        // Set infowindow content and open
        infowindow.setContent(contentString);
        infowindow.open(this.map, marker);
      });
    });
    // fit the map to the newly inclusive bounds
    this.map.fitBounds(this.bounds);
    this.setState({ loading: false, markers: markerArray, infoWindow: infowindow });
  }

  handleListItemClick(venue) {
    const clickedMarker = this.state.markers.find((marker) => marker.id === venue.id);

    // Open infowindow if not already open
    if (this.state.infoWindow.id !== clickedMarker.id) {
      window.google.maps.event.trigger(clickedMarker, 'click');
      console.log('li clicked', clickedMarker);
    }

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
    }

    this.map.setZoom(zoomLevel);
    this.setState({ zoom: zoomLevel });

    if (visibleMarkers.length === 1) {
      window.google.maps.event.trigger(visibleMarkers[0], 'click');

      if (window.innerWidth > 500) {
        this.map.panBy(-150, 0);
      }
    }
  }

  render() {
    return (
      <div id="app-container">
        {this.state.loading && <LoadScreen />}
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
        <Map
          {...this.state}
          id="map"
          initMap={this.initMap}
          closeSidebar={this.closeSidebar}
        />
      </div>
    );
  }
}

export default App;
