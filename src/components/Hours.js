import React from 'react';
import Icon from './Icon';

const Hours = ({ venue, index }) => {
  const venueHours = venue.hours;
  const formatUrl = (url) => url.replace('http://', '');

  if (venueHours) {
    return (
      <table className="table-hours">
        {venueHours.timeframes.map((timeframe, index) => (
          <tbody key={index}>
            <tr key={`row_${index}`}>
              <th key={timeframe.days} scope="row">
                {timeframe.days}
              </th>
              <td key={timeframe.open[0].renderedTime}>
                {timeframe.open[0].renderedTime}
              </td>

              {timeframe.includesToday &&
                (venueHours.isOpen ? (
                  <td key={`isOpen`} className="open">
                    Open now
                  </td>
                ) : (
                  <td key={`isClosed`} className="closed">
                    Closed now
                  </td>
                ))}
            </tr>
            {/* if venue hours contains second time segment add new row */}
            {timeframe.open.length > 1 &&
              timeframe.open
                .filter((index) => index > 0)
                .map((time) => (
                  <tr key={index}>
                    <td key={`blank_cell_${index}`}>&nbsp;</td>
                    <td key={`addnl_hrs_` + time.renderedTime}>{time.renderedTime}</td>
                  </tr>
                ))}
          </tbody>
        ))}
      </table>
    );
  } else {
    return (
      <div className="hours-unavailable">
        <p className="unavailable-message">
          {`We're sorry, no hours have been reported for this venue. Please contact ${
            venue.name
          } for hours.`}
        </p>
        {venue.url && (
          <div className="hours-web info-item">
            <Icon icon="globe" />
            <span className="attribute-key">Website</span>
            <a className="attribute-value" href={venue.url}>
              {formatUrl(venue.url)}
            </a>
          </div>
        )}
        {venue.contact.formattedPhone && (
          <div className="hours-phone info-item">
            <Icon icon="phone" />
            <span className="attribute-key">Phone</span>
            <span className="attribute-value">{venue.contact.formattedPhone}</span>
          </div>
        )}
      </div>
    );
  }
};

export default Hours;
