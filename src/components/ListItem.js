import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    return (
      <li
        className="listItem"
        onClick={() => {
          this.props.handleListItemClick(this.props.venue);
        }}
        // <img src={() => this.props.venues.categories}
      >
        {this.props.venue.name}
      </li>
    );
  }
}
