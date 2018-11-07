import React, { Component } from 'react';

export default class ListItem extends Component {
  handleListItemClick(venue) {
    const clickedMarker = this.props.markers.find((marker) => marker.id === venue.id);
    window.google.maps.event.trigger(clickedMarker, 'click');

    if (window.innerWidth < 600) {
      this.props.toggleSidebar();
    }
  }

  render() {
    return (
      <li
        tabIndex="0"
        className="list-item"
        onClick={() => {
          this.handleListItemClick(this.props.venue);
        }}
      >
        <img
          src={
            this.props.venue.categories[0].icon.prefix +
            '32' +
            this.props.venue.categories[0].icon.suffix
          }
          alt={this.props.venue.categories[0].name}
        />

        {this.props.venue.name}
      </li>
    );
  }
}
