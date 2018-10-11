import React, { Component } from 'react';
import VenueList from './VenueList';

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <input id="searchInput" type="text" placeholder="Search" />
        <VenueList {...this.props} />
      </div>
    );
  }
}
