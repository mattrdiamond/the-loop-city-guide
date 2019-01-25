import React from 'react';
import Icons from '../images/icons.svg';

const InfoWindowContent = (venue) => {
  // Include venue icon if available. Otherwise set as empty string
  const venuePhoto = venue.categories[0]
    ? '<img class="iw-photo" src="' +
      venue.categories[0].icon.prefix +
      '100' +
      venue.categories[0].icon.suffix +
      '" alt="' +
      venue.categories[0].icon.name +
      ' icon" />'
    : '';

  const hoursIcon = `<div class="icon-container clock">
      <svg class="iw-icon"
      role="img" height="14px" width="14px" aria-label="clock icon" >
      <title>location icon</title>
      <use href="${Icons}#clock"/>
      </svg>
    </div>`;

  // open status with icon or empty string
  const venueHours = venue.hasOwnProperty('hours') ? hoursIcon + venue.hours.status : '';

  // Generate content for infoWindow
  const contentString = `<div id='iw-container'>
    ${venuePhoto}
    <div class="iw-content">
    <h4 class="iw-title">${venue.name}</h4>
    <ul class="iw-list">
    <li class="iw-address">
    <div class="icon-container marker">
    <svg class="iw-icon" role="img" height="18px" width="14px" aria-label="location icon" >
    <title>location icon</title>
    <use href="${Icons}#marker"/>
    </svg>
    </div>
    ${venue.location.address}
    </li>
    <li class="iw-hours">${venueHours}</li>
    </ul>
    </div>
    </div>`;

  return contentString;
};

export default InfoWindowContent;
