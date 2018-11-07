import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    return (
      <li
        tabIndex="0"
        className="list-item"
        onClick={() => {
          this.props.handleListItemClick(this.props.venue);
        }}
        onKeyPress={(e) => {
          this.props.listItemKeyPress(e, this.props.venue);
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
