import React, { Component } from 'react';
import VenueList from './VenueList';

export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
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

  handleChange = (e) => {
    this.props.infoWindow.close();
    this.setState({ query: e.target.value });
    const markers = this.props.venues.map((venue) => {
      const queryMatch = venue.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase().trim());
      const marker = this.props.markers.find((marker) => marker.id === venue.id);
      queryMatch ? marker.setVisible(true) : marker.setVisible(false);
      return marker;
    });
    this.props.updateSuperState({ markers: markers });
  };

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
    return (
      <div className="sidebar">
        <input
          id="searchInput"
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
