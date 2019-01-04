import React from 'react';

const Info = ({ venue, index }) => {
  return (
    <React.Fragment>
      {venue.attributes &&
        venue.attributes.groups.map((attribute, index) => (
          <dl className="info-item" key={index}>
            <dt className="attribute-key">{attribute.name}</dt>
            <dd className="attribute-value">{attribute.items[0].displayValue}</dd>
          </dl>
        ))}
    </React.Fragment>
  );
};

export default Info;
