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
    return `Please contact ${venue.name} for hours of operation:`;
  }
};

export default Hours;
