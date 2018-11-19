import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const { venue } = this.props;
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
        {this.props.venue.categories[0] && (
          <img
            src={
              this.props.venue.categories[0].icon.prefix +
              '32' +
              this.props.venue.categories[0].icon.suffix
            }
            alt={this.props.venue.categories[0].name}
          />
        )}

        {this.props.venue.bestPhoto && (
          <img
            src={this.props.venue.bestPhoto.prefix + '100x100' + venue.bestPhoto.suffix}
            alt={'An image of ' + venue.name}
          />
        )}

        {this.props.venue.name}
      </li>
    );
  }
}
