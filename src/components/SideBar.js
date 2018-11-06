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

  // filter venues to match query value
  handleFilterVenues() {
    if (this.state.query.trim() !== '') {
      const matchingVenues = this.props.venues.filter((venue) =>
        venue.name.toLowerCase().includes(this.state.query.toLowerCase().trim())
      );
      return matchingVenues;
    } else {
      return this.props.venues;
    }
  }

  // show markers that match query value and hide others
  handleFilterMarkers = (e) => {
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

    this.didMarkersChange();
  };

  didMarkersChange() {
    const visibleMarkers = this.props.markers.filter((marker) => marker.visible);
    if (visibleMarkers.length > 1) {
      this.props.infoWindow.close();
    }
    // if number of visible markers changed, update map bounds
    if (visibleMarkers.length !== this.state.previousMarkers.length) {
      this.setState({ previousMarkers: visibleMarkers });
      // this.animateMarkers(visibleMarkers);

      // only update map if it contains markers
      if (visibleMarkers.length > 0) {
        this.props.updateMap(visibleMarkers);
      }
    }
    this.setState({ currentMarkers: visibleMarkers });
    // return false;
  }

  // we don't want to apply animations to visibleMarkers, because it is a copy of the super state (filtered). we instead need to apply the animations to the superstate itself
  animateMarkers(visibleMarkers) {
    console.log('visibleMarkers before', visibleMarkers);

    if (visibleMarkers.length > 1) {
      this.props.markers.forEach((marker) => {
        if (marker.getAnimation() < 1) {
          marker.setAnimation(window.google.maps.Animation.DROP);
          // console.log('animation', marker.getAnimation())
        }
      });
      console.log('animation set');
    }
    // visibleMarkers.forEach((marker) => marker.setAnimation(null));
    console.log('visibleMarkers after', visibleMarkers);
    // setTimeout(() => {
    //   visibleMarkers.forEach((marker) => {
    //     marker.setAnimation(null);
    //   });
    // }, 2000);
  }
  // animateMarkers(matchingVenues) {
  //   console.log('animate markers called');
  //   // if (marker.getAnimation() !== null) {
  //   //   marker.setAnimation(null);
  //   // }
  //   console.log('venue length', matchingVenues.length);
  //   if (matchingVenues.length === 1) {
  //     const marker = this.props.markers.find(
  //       (marker) => marker.id === matchingVenues[0].id
  //     );
  //     marker.setAnimation(window.google.maps.Animation.BOUNCE);
  //   } else {
  //     this.props.markers.forEach((marker) =>
  //       marker.setAnimation(window.google.maps.Animation.DROP)
  //     );
  //   }
  // }

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
          onChange={this.handleFilterMarkers}
        />
        <VenueList
          handleListItemClick={this.props.handleListItemClick}
          venues={this.handleFilterVenues()}
        />
      </div>
    );
  }
}
