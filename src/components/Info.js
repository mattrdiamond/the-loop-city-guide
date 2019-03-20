// import React from 'react';

// const Info = ({ venue }) => {
//   return (
//     <React.Fragment>
//       {venue.attributes &&
//         venue.attributes.groups.map((attribute, index) => (
//           <dl className="info-item" key={`${venue.id}_info_${index}`}>
//             <dt className="attribute-key">{attribute.name}</dt>
//             <dd className="attribute-value">{attribute.items[0].displayValue}</dd>
//           </dl>
//         ))}
//     </React.Fragment>
//   );
// };

// export default Info;

import React from 'react';
import Icon from './Icon';

const Info = ({ venue }) => {
  return (
    <React.Fragment>
      {!Array.isArray(venue.attributes.groups) || !venue.attributes.groups.length ? (
        <div className="data-unavailable">
          <p className="unavailable-message">
            {`No details have been reported for this venue. Please contact ${
              venue.name
            } for additional information.`}
          </p>
          {venue.url && (
            <div className="info-item">
              <Icon icon="globe" />
              <span className="attribute-key">Website</span>
              <a className="attribute-value" href={venue.url} target="_blank">
                {venue.url.replace('http://', '')}
              </a>
            </div>
          )}
          {venue.contact.formattedPhone && (
            <div className="info-item">
              <Icon icon="phone" />
              <span className="attribute-key">Phone</span>
              <span className="attribute-value">{venue.contact.formattedPhone}</span>
            </div>
          )}
        </div>
      ) : (
        venue.attributes.groups.map((attribute, index) => (
          <dl className="info-item" key={`${venue.id}_info_${index}`}>
            <dt className="attribute-key">{attribute.name}</dt>
            <dd className="attribute-value">{attribute.items[0].displayValue}</dd>
          </dl>
        ))
      )}
    </React.Fragment>
  );
};

export default Info;
