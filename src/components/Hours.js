import React, { Component } from 'react';

const Hours = ({ venue, index }) => {
  let venueHours = venue.hours;
  let test = true;
  if (venueHours) {
    return (
      <table>
        <tbody>
          {venueHours.timeframes.map((timeframe, index) => (
            <tr key={index}>
              <th scope="row">{timeframe.days}</th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <div className="hours-unavailable">
        <p className="unavailable-message">
          Please contact {venue.name} for hours of operation.
        </p>
        {venue.url && (
          <React.Fragment>
            <span class="bold">Website: </span>
            <a href="{venue.url}">{venue.url}</a>
          </React.Fragment>
        )}
        {venue.contact.formattedPhone && (
          <React.Fragment>
            <span className="bold">Phone: </span>
            <span>{venue.contact.formattedPhone}</span>
          </React.Fragment>
        )}
      </div>
    );
  }
};

export default Hours;
