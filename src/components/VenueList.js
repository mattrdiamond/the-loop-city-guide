import React from 'react';
import ListItem from './ListItem';

const venueList = ({
  venues,
  handleListItemClick,
  handleKeyPress,
  infoWindow,
  loading,
}) => {
  return (
    <ul className="venue-list">
      {venues &&
        venues.map((venue) => (
          <ListItem
            key={`venue_${venue.location.address?.replace(/\s+/g, '')}_${
              venue.createdAt
            }`}
            venue={venue}
            handleListItemClick={handleListItemClick}
            handleKeyPress={handleKeyPress}
            infoWindow={infoWindow}
            loading={loading}
          />
        ))}
    </ul>
  );
};

export default venueList;
