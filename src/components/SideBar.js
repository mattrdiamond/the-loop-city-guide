import React, { Component } from 'react';
import VenueList from './VenueList';

export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({ query: e.target.value });
    const markers = this.props.venues.map((venue) => {
      const queryMatch = venue.name.toLowerCase().includes(e.target.value.toLowerCase());
      const marker = this.props.markers.find((marker) => marker.id === venue.id);
      queryMatch ? marker.setVisible(true) : marker.setVisible(false);
      return marker;
    });
    console.log(markers);
    this.props.updateSuperState({ markers: markers });
  };

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
          venues={this.props.venues}
        />
      </div>
    );
  }
}
