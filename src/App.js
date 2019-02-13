import React, { Component } from 'react';
import NavBar from './components/SearchBar';
import NavButton from './components/NavButton';
import SideBar from './components/SideBar';
import Map from './components/Map';
import FoursquareAPI from './API/Foursquare';
import './App.css';
import LoadScreen from './components/LoadScreen';
import InfoWindowContent from './components/InfoWindowContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      markers: [],
      activeMarker: { prevMarker: null, nextMarker: null },
      center: [],
      zoom: 12,
      infoWindow: '',
      sidebarOpen: true,
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

  componentDidMount() {
    this.setState({ loading: true });
    // Option 1: fetch venues based on keyword from Foursquare
    // FoursquareAPI.search({
    //   near: 'Chicago, IL',
    //   query: 'restaurant',
    //   limit: 10
    // })
    //   .then((results) => {
    //     const { venues } = results.response;
    //     const { center } = results.response.geocode.feature.geometry;
    //     console.log('results', venues);
    //     console.log('center', center);
    //     this.fetchVenueDetails(venues, center);
    //     return venues;
    //   })
    //   .catch((error) => {
    //     alert('Error: Failed to fetch Foursquare Venues');
    //   });

    // Option 2: fetch recommended venues from Foursquare
    FoursquareAPI.getVenueRecommendations({
      near: 'Chicago, IL',
      section: 'food',
      limit: 2
    })
      .then((results) => {
        const { items } = results.response.groups[0];
        const { center } = results.response.geocode;
        const venues = items.map((item) => item.venue);
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
        venueData.sort(this.compareVenues);
        this.setState({ venues: venueData, center: center });
      })
      .catch((error) => {
        alert('Error: Failed to fetch Foursquare Details');
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // update map zoom level if the data has changed
    if (prevState.zoom !== this.state.zoom) {
      this.map.setZoom(this.state.zoom);
    }
    // run initMap once venues have been fetched
    if (prevState.venues !== this.state.venues) {
      this.initMap();
    }
  }

  // Sort venues alphabetically by venue name
  compareVenues(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  initMap() {
    // Create empty LatLngBounds object
    this.bounds = new window.google.maps.LatLngBounds();

    // Load map
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.center,
      zoom: this.state.zoom,
      mapTypeControl: false
    });

    // Create single InfoWindow
    const infowindow = new window.google.maps.InfoWindow();
    infowindow.id = '';

    // Create marker for each venue
    const markerArray = this.state.venues.map((venue) => {
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

      // Extend the bounds to include each marker's position
      this.bounds.extend(marker.position);

      // Add click event to each marker
      marker.addListener('click', () => {
        // Animate marker
        this.toggleBounce(marker);

        // Add current marker id to infowindow
        infowindow.id = marker.id;

        // Set infowindow content and open
        infowindow.setContent(InfoWindowContent(venue));
        infowindow.open(this.map, marker);

        // add clicked marker id to activeMarker
        if (marker.id !== this.state.activeMarker.nextMarker) {
          const newActiveMarker = this.updateActiveMarker(marker);
          this.setState({ infoWindow: infowindow, activeMarker: newActiveMarker });
        }
      });
      return marker;
    });
    // fit the map to the newly inclusive bounds
    this.map.fitBounds(this.bounds);
    this.setState({ loading: false, markers: markerArray, infoWindow: infowindow });
  }

  updateActiveMarker(marker) {
    let copy = { ...this.state.activeMarker };
    copy.prevMarker = copy.nextMarker;
    copy.nextMarker = marker.id;
    return copy;
  }

  handleListItemClick(venue) {
    const { markers, infoWindow } = this.state;
    const clickedMarker = markers.find((marker) => marker.id === venue.id);

    // Open infowindow if not already open
    if (infoWindow.id !== clickedMarker.id) {
      window.google.maps.event.trigger(clickedMarker, 'click');
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
    }
  }

  render() {
    console.log('render app');
    console.log('app.js: loading:', this.state.loading);

    const {
      toggleSidebar,
      navKeyPress,
      handleListItemClick,
      updateMapBounds,
      listItemKeyPress,
      closeSidebar,
      state: { sidebarOpen }
    } = this;

    return (
      <main id="app-container">
        {this.state.loading && <LoadScreen />}
        <NavButton
          toggleSidebar={toggleSidebar}
          sidebarOpen={sidebarOpen}
          navKeyPress={navKeyPress}
        />
        <SideBar
          {...this.state}
          handleListItemClick={handleListItemClick}
          updateMapBounds={updateMapBounds}
          listItemKeyPress={listItemKeyPress}
        />
        <Map sidebarOpen={sidebarOpen} id="map" closeSidebar={closeSidebar} />
      </main>
    );
  }
}

export default App;
