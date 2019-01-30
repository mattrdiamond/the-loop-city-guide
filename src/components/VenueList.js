import React, { Component } from 'react';
import ListItem from './ListItem';

export default class venueList extends Component {
  render() {
    // Sort venues alphabetically by venue name
    let venueCopy = [...this.props.venues];

    function compare(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
    venueCopy.sort(compare);

    return (
      <ul className="venue-list">
        {this.props.venues &&
          venueCopy.map((venue, index) => (
            <ListItem
              key={venue.location.address + venue.createdAt}
              venue={venue}
              handleListItemClick={this.props.handleListItemClick}
              listItemKeyPress={this.props.listItemKeyPress}
              infoWindow={this.props.infoWindow}
              activeMarker={this.props.activeMarker}
            />
          ))}
      </ul>
    );
    {
      /*return (
      <ul className="venue-list">
        {this.props.venues &&
          this.props.venues.map((venue, index) => (
            <ListItem
              key={venue.location.address + venue.createdAt}
              venue={venue}
              handleListItemClick={this.props.handleListItemClick}
              listItemKeyPress={this.props.listItemKeyPress}
            />
          ))}
      </ul>
          );*/
    }
  }
}
