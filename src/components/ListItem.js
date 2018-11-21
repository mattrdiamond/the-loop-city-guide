import React, { Component } from 'react';

export default class ListItem extends Component {
  getVenuePrice(price) {
    // const activePrice = `<span class="price-active">$</span>`;
    // const inactivePrice = `<span class="price-inactive">$</span>`;
    const activePrice = <span class="price-active">$</span>;
    const inactivePrice = <span class="price-inactive">$</span>;
    let formattedPrice = [];
    for (let i = 0; i < 4; i++) {
      price > 0 ? formattedPrice.push(activePrice) : formattedPrice.push(inactivePrice);
      price--;
    }
    console.log('formatted price', formattedPrice);
    return formattedPrice;

    // let formattedPrice;
    // switch (price) {
    //   case 1:
    //     formattedPrice = activePrice + inactivePrice + inactivePrice + inactivePrice;
    //     break;
    //   case 2:
    //     formattedPrice = activePrice + activePrice + inactivePrice + inactivePrice;
    //     break;
    //   case 3:
    //     formattedPrice = activePrice + activePrice + activePrice + inactivePrice;
    //     break;
    //   case 4:
    //     formattedPrice = activePrice + activePrice + activePrice + activePrice;
    //     break;
    // }
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
    // *****************remove all of the extra this.props!

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
          this.props.handleListItemClick(this.props.venue);
        }}
        onKeyPress={(e) => {
          this.props.listItemKeyPress(e, this.props.venue);
        }}
      >
        <div class="content-container">
          {/*--------------if icon exists, display icon image--------------*/}
          {/*{this.props.venue.categories[0] && (
          <img
            src={
              this.props.venue.categories[0].icon.prefix +
              '32' +
              this.props.venue.categories[0].icon.suffix
            }
            alt={this.props.venue.categories[0].name}
          />
          )}*/}

          {/*--------------if venue photo exists, display venue photo--------------*/}
          {/*{this.props.venue.bestPhoto && (
          <img
            src={this.props.venue.bestPhoto.prefix + '100x100' + venue.bestPhoto.suffix}
            alt={'An image of ' + venue.name}
          />
        )}*/}

          {/* -------display image, icon or placeholder-------*/}
          {<img src={venueImage} alt={'An image of ' + venue.name} />}
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
        </div>
      </li>
    );
  }
}
