import React, { Component } from 'react';
import VenueList from './VenueList';

export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      previousMarkers: [],
      currentMarkers: []
    };
  }

  handleFilterVenues() {
    if (this.state.query.trim() !== '') {
      const matchingVenues = this.props.venues.filter((venue) =>
        venue.name.toLowerCase().includes(this.state.query.toLowerCase().trim())
      );
      this.animateMarkers(matchingVenues);
      return matchingVenues;
    } else {
      return this.props.venues;
    }
  }

  // find markers that match query value and hide others
  handleChange = (e) => {
    this.setState({ query: e.target.value });
    // check each venue to see if it includes query value
    const markers = this.props.venues.map((venue) => {
      const queryMatch = venue.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase().trim());
      // find corresponding marker
      const marker = this.props.markers.find((marker) => marker.id === venue.id);
      // set visible if marker matches query value
      queryMatch ? marker.setVisible(true) : marker.setVisible(false);
      return marker;
    });
    this.props.updateSuperState({ markers: markers });
    // update map bounds to focus on filtered markers
    const visibleMarkers = this.props.markers.filter((marker) => marker.visible);
    if (visibleMarkers.length > 1) {
      this.props.infoWindow.close();
    }
    this.didMarkersChange(visibleMarkers);

    // if (this.didMarkersChange()) {
    // this.props.updateMap();
    // }
  };

  didMarkersChange(visibleMarkers) {
    // const visibleMarkers = this.props.markers.filter((marker) => marker.visible);
    if (visibleMarkers.length !== this.state.previousMarkers.length) {
      this.setState({ previousMarkers: visibleMarkers });
      // return true;
      // this.animateMarkers();

      // console.log('value change');
      this.props.updateMap();
    }
    this.setState({ currentMarkers: visibleMarkers });
    // return false;
  }

  // didMarkersChange() {
  //   const showingMarkers = this.props.markers.filter((marker) => marker.visible);
  //   if (showingMarkers.length !== this.state.previousMarkers.length) {
  //     this.setState({ previousMarkers: showingMarkers });

  //     console.log('value change');
  //     this.props.updateMap();
  //   }
  //   this.setState({ currentMarkers: showingMarkers });

  // }

  // componentDidMount() {
  //   const showingMarkers = this.props.markers.filter((marker) => marker.visible);
  //   this.setState({ currentMarkers: showingMarkers });
  //   console.log('mounted', showingMarkers);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.currentMarkers !== nextState.currentMarkers) {
  //     console.log('marker change');
  //     return true;
  //   }
  //   console.log('no marker change');
  //   return false;
  // }

  animateMarkers(matchingVenues) {
    if (matchingVenues.length === 1) {
      const marker = this.props.markers.find(
        (marker) => marker.id === matchingVenues[0].id
      );
      marker.setAnimation(window.google.maps.Animation.BOUNCE);
    } else {
      this.props.markers.forEach((marker) =>
        marker.setAnimation(window.google.maps.Animation.DROP)
      );
    }
  }

  render() {
    let sidebarVisibility = 'hidden';

    if (this.props.sidebarOpen) {
      sidebarVisibility = 'visible';
    }

    return (
      <div id="venue-sidebar" className={sidebarVisibility}>
        <input
          id="search-input"
          type="text"
          placeholder="Search"
          onChange={this.handleChange}
        />
        <VenueList
          handleListItemClick={this.props.handleListItemClick}
          venues={this.handleFilterVenues()}
        />
      </div>
    );
  }
}
