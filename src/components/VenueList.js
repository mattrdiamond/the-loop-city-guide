import React, { Component } from 'react';
import ListItem from './ListItem';

export default class venueList extends Component {
  render() {
    return (
      <ul className="venueList">
        {this.props.venues &&
          this.props.venues.map((venue, index) => <ListItem key={index} {...venue} />)}
      </ul>
    );
  }
}
