import React, { Component } from 'react';
import NavButton from './components/NavButton';
import SideBar from './components/SideBar';
import Map from './components/Map';
import FoursquareAPI from './API/Foursquare';
import './App.css';
import InfoWindowContent from './components/InfoWindowContent';
import BillingModal from './components/BillingModal';
import WithModal from './components/WithModal';
import MapStyles from './MapStyles.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 12,
      infoWindow: '',
      sidebarOpen: true,
      loading: false,
      category: 'food',
      updateSuperState: (obj) => {
        this.setState(obj);
      },
    };
    this.initMap = this.initMap.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.updateMapBounds = this.updateMapBounds.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.fetchVenues = this.fetchVenues.bind(this);
    this.createMarkers = this.createMarkers.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });

    // Fetch venues and then initialize map
    this.fetchVenues(this.initMap);
  }

  componentDidUpdate(prevProps, prevState) {
    // If category changed, clear markers, fetch data and create new markers
    if (prevState.category !== this.state.category) {
      this.clearMarkers();
      this.fetchVenues(this.createMarkers);
    }
  }

  fetchVenues(callback) {
    FoursquareAPI.getVenueRecommendations({
      near: 'Chicago, IL',
      section: this.state.category,
      limit: 10,
    })
      .then((results) => {
        const { items } = results.response.groups[0];
        const { center } = results.response.geocode;
        const venues = items.map((item) => item.venue);
        const venuePromises = venues.map((venue) => {
          return FoursquareAPI.getVenueDetails(venue.id).then(
            (results) => results.response.venue
          );
        });
        const venueDetails = Promise.all(venuePromises);
        return venueDetails;
      })
      .then((venueDetails, center) => {
        const sortedVenues = venueDetails.sort((a, b) =>
          this.stripFirstArticle(a.name) > this.stripFirstArticle(b.name) ? 1 : -1
        );
        this.setState({ venues: sortedVenues, center: center });
        callback();
      })
      .catch((error) => {
        console.log(error);
        alert('Error: Failed to fetch Foursquare Venues');
      });
  }

  stripFirstArticle(string) {
    // remove articles 'a', 'the' and 'an' from beginning of string
    return string.replace(/^(a |the |an )/i, '').trim();
  }

  initMap() {
    // Load map
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.center,
      zoom: this.state.zoom,
      styles: MapStyles,
      mapTypeControl: false,
    });

    // Create single InfoWindow
    this.infowindow = new window.google.maps.InfoWindow();
    this.infowindow.id = '';

    // Add markers
    this.createMarkers();
  }

  createMarkers() {
    const {
      infowindow,
      state: { venues },
    } = this;

    // Create marker for each venue
    const markerArray = venues.map((venue) => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng,
        },
        id: venue.id,
        map: this.map,
        title: venue.name,
        animation: window.google.maps.Animation.DROP,
      });

      marker.addListener('click', () => {
        // Animate marker
        this.toggleBounce(marker);

        // Add current marker id to infowindow
        infowindow.id = marker.id;

        // Set infowindow content and open
        infowindow.setContent(InfoWindowContent(venue));
        this.setState({ infoWindow: infowindow });
        infowindow.open(this.map, marker);
      });
      return marker;
    });
    this.updateMapBounds(markerArray);
    this.setState({ loading: false, markers: markerArray, infoWindow: infowindow });
  }

  updateMapBounds(visibleMarkers) {
    let newBounds = new window.google.maps.LatLngBounds();

    // Extend the map bounds to include each marker's position
    visibleMarkers.forEach((marker) => newBounds.extend(marker.position));
    this.map.fitBounds(newBounds);

    // set max zoom level when bounds change
    window.google.maps.event.addListenerOnce(this.map, 'bounds_changed', () => {
      let zoomLevel = this.map.getZoom();
      if (zoomLevel > 15) {
        zoomLevel = 15;
      }
      this.map.setZoom(zoomLevel);
      this.setState({ zoom: zoomLevel });
    });

    if (visibleMarkers.length === 1) {
      window.google.maps.event.trigger(visibleMarkers[0], 'click');
    }
  }

  clearMarkers() {
    this.setState({ loading: true });
    this.state.markers.forEach((marker) => marker.setMap(null));
  }

  handleListItemClick(venue) {
    const { markers, infoWindow } = this.state;
    const clickedMarker = markers.find((marker) => marker.id === venue.id);

    // Open infowindow if not already open
    if (infoWindow.id !== clickedMarker.id) {
      window.google.maps.event.trigger(clickedMarker, 'click');
    }
  }

  // return function that executes onClick. Event parameter optional.
  handleKeyPress(onClick, e) {
    return ({ key }) => {
      if (key === 'Enter') {
        onClick(e);
      }
    };
  }

  toggleSidebar() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  closeSidebar() {
    this.setState({ sidebarOpen: false });
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
    const {
      toggleSidebar,
      handleListItemClick,
      updateMapBounds,
      closeSidebar,
      handleKeyPress,
      state: { sidebarOpen },
    } = this;

    return (
      <main id="app-container">
        <NavButton
          toggleSidebar={toggleSidebar}
          sidebarOpen={sidebarOpen}
          handleKeyPress={handleKeyPress}
        />
        <SideBar
          {...this.state}
          handleListItemClick={handleListItemClick}
          updateMapBounds={updateMapBounds}
          handleKeyPress={handleKeyPress}
        />
        <Map sidebarOpen={sidebarOpen} id="map" closeSidebar={closeSidebar} />
      </main>
    );
  }
}

export default WithModal({ Modal: BillingModal, showModal: true })(App);
