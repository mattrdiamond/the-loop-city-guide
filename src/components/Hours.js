import React from 'react';
import Icon from './Icon';

const Hours = ({ venue }) => {
  const venueHours = venue.hours;
  if (venueHours) {
    return (
      <table className="table-hours">
        {venueHours.timeframes.map((timeframe, index) => (
          <tbody key={`${venue.id}_tbody_${index}`}>
            <tr key={`${venue.id}_row_${index}`}>
              <th key={`${venue.id}_${timeframe.days}`} scope="row">
                {timeframe.days}
              </th>
              <td key={venue.id + '_hours_' + index}>{timeframe.open[0].renderedTime}</td>
              {/* If timeframe includes today, display open status or empty cell */}
              {timeframe.includesToday ? (
                venueHours.isOpen ? (
                  <td key={`${venue.id}_isOpen`} className="open">
                    Open now
                  </td>
                ) : (
                  <td key={`${venue.id}_isClosed`} className="closed">
                    Closed now
                  </td>
                )
              ) : (
                <td>&nbsp;</td>
              )}
            </tr>
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
            <a className="attribute-value" href={venue.url} target="_blank">
              {venue.url.replace('http://', '')}
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
