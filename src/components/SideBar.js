import React, { Component } from 'react';
import VenueList from './VenueList';
import SearchBar from './SearchBar';

export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      previousMarkers: []
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

  // check to see if number of markers changed before updating map bounds
  didMarkersChange() {
    const visibleMarkers = this.props.markers.filter((marker) => marker.visible);
    // close infoWindow unless the map contains a single marker
    console.log('test', this.props.infoWindow);
    if (visibleMarkers.length > 1) {
      this.props.infoWindow.close();
    }

    // only update map bounds if the number of markers changed the map contains markers
    if (
      visibleMarkers.length !== this.state.previousMarkers.length &&
      visibleMarkers.length > 0
    ) {
      // update map bounds to focus on visible markers
      this.props.updateMapBounds(visibleMarkers);
    }
    // update previousMarkers for next execution
    this.setState({ previousMarkers: visibleMarkers });
  }

  render() {
    const { sidebarOpen } = this.props;

    return (
      <section id="venue-sidebar" className={sidebarOpen ? 'visible' : 'hidden'}>
        <SearchBar
          toggleSidebar={this.props.toggleSidebar}
          sidebarOpen={this.props.sidebarOpen}
          navKeyPress={this.props.navKeyPress}
          handleFilterMarkers={this.handleFilterMarkers}
        />
        <div className="sidebar-wrapper">
          <VenueList
            handleListItemClick={this.props.handleListItemClick}
            listItemKeyPress={this.props.listItemKeyPress}
            infoWindow={this.props.infoWindow}
            venues={this.handleFilterVenues()}
            activeMarker={this.props.activeMarker}
          />
          <p className="attribution">Powered by FourSquare</p>
        </div>
      </section>
    );
  }
}
