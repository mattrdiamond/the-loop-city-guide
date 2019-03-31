import React, { Component } from 'react';
import Tabs from './Tabs';
import Tip from './Tip';
import Hours from './Hours';
import Info from './Info';
import Icon from './Icon';
import Placeholder from '../images/placeholder.svg';
import ListItemLoader from './ListItemLoader';

export default class ListItem extends Component {
  // Convert venue price into dollar signs
  getVenuePrice(price) {
    const { venue } = this.props;
    const formattedPrice = [];
    for (let i = 0; i < 4; i++) {
      price > 0
        ? formattedPrice.push(
            <span key={venue.id + '_' + i} className="price-active">
              $
            </span>
          )
        : formattedPrice.push(
            <span key={venue.id + '_' + i} className="price-inactive">
              $
            </span>
          );
      price--;
    }
    return formattedPrice;
  }

  // Convert seconds into formatted date
  formatDate(secs) {
    let date = new Date(null);
    date.setTime(secs * 1000);
    const dateString = date.toLocaleString();
    date = dateString.substr(0, dateString.lastIndexOf(','));
    return date;
  }

  // remove word "restaurant" from category name
  formatCategory(category) {
    const removeRestaurant = category.toLowerCase().replace(' restaurant', '');
    return removeRestaurant;
  }

  render() {
    const { venue, infoWindow, handleListItemClick, handleKeyPress } = this.props;

    return (
      <React.Fragment>
        {/*--- Display loading component for each venue until fetch complete ---*/}
        {this.props.loading ? (
          <ListItemLoader />
        ) : (
          <li
            tabIndex="0"
            className={'list-item' + (infoWindow.id === venue.id ? ' active' : '')}
            onClick={() => {
              handleListItemClick(venue);
            }}
            onKeyPress={handleKeyPress(handleListItemClick, venue)}
          >
            <div className="content-container">
              <div className="content-inner-wrapper">
                {
                  <img
                    className="venue-image"
                    src={
                      venue.bestPhoto
                        ? venue.bestPhoto.prefix + '100x100' + venue.bestPhoto.suffix
                        : `${Placeholder}`
                    }
                    alt={'An image of ' + venue.name}
                  />
                }
                <div className="info-column">
                  <h2 className="venue-name">{venue.name}</h2>

                  {venue.categories[0] && (
                    <span className="venue-category">
                      {this.formatCategory(venue.categories[0].name)}
                    </span>
                  )}

                  {venue.price && (
                    <React.Fragment>
                      <span className="vert-line">|</span>
                      <span className="venue-price">
                        {this.getVenuePrice(venue.price.tier)}
                      </span>
                    </React.Fragment>
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

              <Tabs venue={venue}>
                <div label="tips">
                  <ul className="tip-list">
                    <Tip venue={venue} formatDate={this.formatDate} />
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
        )}
      </React.Fragment>
    );
  }
}
