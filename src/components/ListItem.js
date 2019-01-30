// import React, { Component } from 'react';
import React, { Component, PureComponent } from 'react';
import Tabs from './Tabs';
import Tip from './Tip';
import Hours from './Hours';
import Info from './Info';
import Icon from './Icon';

export default class ListItem extends Component {
  shouldComponentUpdate(nextProps) {
    // Performance: only update active venue and previously active venue
    // (to toggle 'active' class on and off)
    if (
      nextProps.activeMarker !== this.props.activeMarker &&
      (nextProps.activeMarker.prevMarker === this.props.venue.name ||
        nextProps.activeMarker.nextMarker === this.props.venue.name)
    ) {
      return true;
    }
    return false;
  }

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

  formatCategory(category) {
    // remove word "restaurant" from category name
    const removeRestaurant = category.toLowerCase().replace(' restaurant', '');
    return removeRestaurant;
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

  // set venue image as image, icon, or placeholder based on data recieved
  getVenueImage(venue) {
    let venueImage;
    if (venue.bestPhoto) {
      venueImage = venue.bestPhoto.prefix + '100x100' + venue.bestPhoto.suffix;
    } else if (venue.categories.length > 0) {
      venueImage =
        venue.categories[0].icon.prefix + '100' + venue.categories[0].icon.suffix;
    } else {
      venueImage = 'https://via.placeholder.com/50';
    }
    return venueImage;
  }

  render() {
    const { venue, infoWindow } = this.props;
    console.log('ListItem: rendered ' + venue.name);

    return (
      <li
        tabIndex="0"
        className={'list-item' + (infoWindow.id === venue.id ? ' active' : '')}
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
                src={this.getVenueImage(venue)}
                alt={'An image of ' + venue.name}
              />
            }
            {/*{<img src={this.getVenuePhoto(venue)} alt={'An image of ' + venue.name} />}*/}

            <div className="info-column">
              <h2 className="venue-name">{venue.name}</h2>

              {venue.categories[0] && (
                <span className="venue-info">
                  {/*<span className="venue-category">{venue.categories[0].name}</span>*/}
                  <span className="venue-category">
                    {this.formatCategory(venue.categories[0].name)}
                  </span>
                  <span className="vert-line">|</span>
                </span>
              )}

              {venue.price && (
                <span className="venue-info venue-price">
                  {this.getVenuePrice(venue.price.tier)}
                </span>
              )}

              {venue.location.address && (
                <div className="address-container">
                  <span className="venue-address">{venue.location.address}</span>
                  <span className="venue-address">
                    {venue.location.formattedAddress[1]}
                  </span>
                </div>
              )}
            </div>

            {venue.rating && (
              <div className="rating-column">
                <div className="rating-container">
                  <Icon icon="star" width="13px" height="13px" />
                  <span>{venue.rating}</span>
                </div>
              </div>
            )}
          </div>

          <Tabs>
            <div label="tips">
              <ul className="tip-list">
                <Tip venue={venue} />
              </ul>
            </div>
            <div label="hours">
              <Hours venue={venue} />
            </div>
            <div label="info">
              <Info venue={venue} />
            </div>
          </Tabs>
        </div>
      </li>
    );
  }
}
