import React, { Component } from 'react';

const Hours = ({ venue, index }) => {
  const venueHours = venue.hours;

  if (venueHours) {
    return (
      <table className="table-hours">
        <tbody>
          {venueHours.timeframes.map((timeframe, index) => (
            <tr key={index}>
              <th scope="row">{timeframe.days}</th>
              {/*<td>{timeframe.open[0].renderedTime}</td>*/}
              {timeframe.open.map((timeSegment, index) => (
                <td className="hours" key={index}>
                  {timeSegment.renderedTime}
                </td>
              ))}
              {timeframe.includesToday &&
                (venueHours.isOpen ? (
                  <td className="open">Open now</td>
                ) : (
                  <td className="closed">Closed now</td>
                ))}
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
          <div className="hours-website">
            <span class="bold">Website: </span>
            <a href="{venue.url}">{venue.url}</a>
          </div>
        )}
        {venue.contact.formattedPhone && (
          <div className="hours-phone">
            <span className="bold">Phone: </span>
            <span>{venue.contact.formattedPhone}</span>
          </div>
        )}
      </div>
    );
  }
};

export default Hours;
