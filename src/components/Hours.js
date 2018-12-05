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
                <td className="hours" key={index}>{timeSegment.renderedTime}</td>
              ))}
              {timeframe.includesToday && (
                venueHours.isOpen ? (<td className="open">Open now</td>) : (<td className="closed">Closed now</td>)
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
