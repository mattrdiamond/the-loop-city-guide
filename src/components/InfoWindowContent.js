import Icons from '../images/icons.svg';

const InfoWindowContent = (venue) => {

  // Include venue icon if available
  const category = venue.categories[0];
  const venueIcon = category
    ? '<img class="iw-photo" src="' +
      category.icon.prefix +
      '100' +
      category.icon.suffix +
      '" alt="' +
      category.icon.name +
      ' icon" />'
    : '';

  const hoursIcon =
    `<div class="icon-container clock">
      <svg class="iw-icon"
        role="img" height="13px" width="13px" aria-label="clock icon" >
        <title>location icon</title>
        <use href="${Icons}#clock"/>
      </svg>
    </div>`;

  // open status with icon or empty string
  const venueHours = venue.hasOwnProperty('hours') ? hoursIcon + venue.hours.status : '';

  // Generate content for infoWindow
  const contentString =
    `<div id='iw-container'>
      ${venueIcon}
      <div class="iw-content">
        <h4 class="iw-title">${venue.name}</h4>
        <ul class="iw-list">
          <li class="iw-address">
            <div class="icon-container marker">
              <svg class="iw-icon" role="img" height="17px" width="13px" aria-label="location icon" >
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
