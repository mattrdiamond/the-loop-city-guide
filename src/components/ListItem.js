import React, { Component } from 'react';
import Tabs from './Tabs';

export default class ListItem extends Component {
  getVenuePrice(price) {
    const activePrice = <span class="price-active">$</span>;
    const inactivePrice = <span class="price-inactive">$</span>;
    let formattedPrice = [];
    for (let i = 0; i < 4; i++) {
      price > 0 ? formattedPrice.push(activePrice) : formattedPrice.push(inactivePrice);
      price--;
    }
    return formattedPrice;
  }
  // getVenuePhoto(venue) {
  //   let venueImage;
  //   if (venue.bestPhoto) {
  //     return (venueImage = venue.bestPhoto.prefix + '100x100' + venue.bestPhoto.suffix);
  //   } else if (venue.categories.length > 0) {
  //     return (venueImage =
  //       venue.categories[0].icon.prefix + '32' + venue.categories[0].icon.suffix);
  //   } else {
  //     return (venueImage = 'https://via.placeholder.com/50');
  //   }
  // }
  render() {
    const { venue } = this.props;

    let venueImage;

    // set venue image as image, icon, or placeholder based on data recieved
    if (venue.bestPhoto) {
      venueImage = venue.bestPhoto.prefix + '100x100' + venue.bestPhoto.suffix;
    } else if (venue.categories.length > 0) {
      venueImage =
        venue.categories[0].icon.prefix + '32' + venue.categories[0].icon.suffix;
    } else {
      venueImage = 'https://via.placeholder.com/50';
    }

    return (
      <li
        tabIndex="0"
        className="list-item"
        onClick={() => {
          this.props.handleListItemClick(venue);
        }}
        onKeyPress={(e) => {
          this.props.listItemKeyPress(e, venue);
        }}
      >
        <div class="content-container">
          <div class="content-inner-wrapper">
            {/* -------display image, icon or placeholder-------*/}
            {
              <img
                class="venue-image"
                src={venueImage}
                alt={'An image of ' + venue.name}
              />
            }
            {/*{<img src={this.getVenuePhoto(venue)} alt={'An image of ' + venue.name} />}*/}

            <div class="info-column">
              <h2>{venue.name}</h2>

              {venue.categories[0] && (
                <span class="venue-info">
                  <span class="venue-category">{venue.categories[0].name}</span>
                  <span class="vert-line">|</span>
                </span>
              )}

              {venue.price && (
                <span class="venue-info">{this.getVenuePrice(venue.price.tier)}</span>
              )}

              {venue.location.address && (
                <div class="venue-address">
                  <p>{venue.location.address}</p>
                  <p>{venue.location.city}</p>
                </div>
              )}
            </div>

            <div class="rating-column">
              {venue.rating && (
                <div class="rating-container">
                  <img src={require('../images/star.svg')} alt="star" />
                  <span>{venue.rating}</span>
                </div>
              )}
            </div>
          </div>

          <Tabs>
            <div label="Tips">
              See ya later, <em>Alligator</em>!
            </div>
            <div label="Hours">
              After &apos;while, <em>Crocodile</em>!
            </div>
            <div label="Info">
              Nothing to see here, this tab is <em>extinct</em>!
            </div>
          </Tabs>
        </div>
      </li>
    );
  }
}
