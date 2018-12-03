import React, { Component } from 'react';
import Tabs from './Tabs';
import Tip from './Tip';
import Hours from './Hours';

export default class ListItem extends Component {
  getVenuePrice(price) {
    // convert venue price into dollar sign icons
    let formattedPrice = [];
    for (let i = 0; i < 4; i++) {
      price > 0
        ? formattedPrice.push(
            <span key={i} className="price-active">
              $
            </span>
          )
        : formattedPrice.push(
            <span key={i} className="price-inactive">
              $
            </span>
          );
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
        <div className="content-container">
          <div className="content-inner-wrapper">
            {
              <img
                className="venue-image"
                src={venueImage}
                alt={'An image of ' + venue.name}
              />
            }
            {/*{<img src={this.getVenuePhoto(venue)} alt={'An image of ' + venue.name} />}*/}

            <div className="info-column">
              <h2>{venue.name}</h2>

              {venue.categories[0] && (
                <span className="venue-info">
                  <span className="venue-category">{venue.categories[0].name}</span>
                  <span className="vert-line">|</span>
                </span>
              )}

              {venue.price && (
                <span className="venue-info">{this.getVenuePrice(venue.price.tier)}</span>
              )}

              {venue.location.address && (
                <div className="venue-address">
                  <p>{venue.location.address}</p>
                  <p>{venue.location.city}</p>
                </div>
              )}
            </div>

            <div className="rating-column">
              {venue.rating && (
                <div className="rating-container">
                  <img src={require('../images/star.svg')} alt="star" />
                  <span>{venue.rating}</span>
                </div>
              )}
            </div>
          </div>

          <Tabs>
            <div label="Tips">
              <ul className="tip-list">
                <Tip venue={venue} />
              </ul>
            </div>
            <div label="Hours">
              <Hours venue={venue} />
            </div>
            <div label="Info">Placeholder text info</div>
          </Tabs>
        </div>
      </li>
    );
  }
}
