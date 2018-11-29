import React, { Component } from 'react';

class Tip extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getTip(venue) {
    console.log('testes');
    let userPhoto;
    let users = venue.tips.groups[0].items;

    return users.map((user, index) => (
      <li key={index}>
        <img
          src={user.user.photo.prefix + '50x50' + user.user.photo.suffix}
          alt={'a photo of ' + user.user.firstName}
        />
      </li>
    ));
  }

  render() {
    const { venue } = this.props;
    let venueImage;

    return <ul>{this.getTip(venue)}</ul>;
  }
}

export default Tip;
