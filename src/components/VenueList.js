import React from 'react';
import ListItem from './ListItem';

const venueList = ({
  venues,
  handleListItemClick,
  listItemKeyPress,
  infoWindow,
  loading
}) => (
  <ul className="venue-list">
    {venues &&
      venues.map((venue) => (
        <ListItem
          key={`venue_${venue.location.address.replace(/\s+/g, '')}_${venue.createdAt}`}
          venue={venue}
          handleListItemClick={handleListItemClick}
          listItemKeyPress={listItemKeyPress}
          infoWindow={infoWindow}
          loading={loading}
        />
      ))}
  </ul>
);

export default venueList;
