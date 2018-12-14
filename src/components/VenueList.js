import React, { Component } from 'react';
import ListItem from './ListItem';

export default class venueList extends Component {
  render() {
    return (
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
    );
  }
}
