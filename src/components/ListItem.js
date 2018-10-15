import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    return (
      <li
        className="listItem"
        onClick={() => {
          console.log('clicked venue', this.props.venue);
          this.props.handleListItemClick(this.props.venue);
        }}
      >
        {this.props.venue.name}
      </li>
    );
  }
}
