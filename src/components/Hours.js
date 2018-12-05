import React, { Component } from 'react';

const Hours = ({ venue, index }) => {
  const venueHours = venue.hours;
  const isOpen = venueHours.isOpen;
  let statusColor = isOpen ? 'open' : 'closed';

  if (venueHours) {
    return (
      <table className="table-hours">
        <tbody>
          {venueHours.timeframes.map((timeframe, index) => (
            <tr key={index}>
              <th scope="row">{timeframe.days}</th>
              {/*<td>{timeframe.open[0].renderedTime}</td>*/}
              {timeframe.open.map((timeSegment, index) => (
                <td key={index}>{timeSegment.renderedTime}</td>
              ))}
              {timeframe.includesToday && (
                <td className={statusColor}>{venueHours.status}</td>
              )}
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
