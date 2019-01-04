import React from 'react';
import Icons from '../images/icons.svg';

// Icon component includes height and width props
// if not specified, fallback props will be used (15px)
const Icon = (props) => (
  <svg
    className={`icon icon-${props.icon}`}
    role="img"
    height={props.height || '15px'}
    width={props.width || '15px'}
    aria-label={props.icon + ' icon'}
  >
    <title>{props.icon + ' icon'}</title>
    <use xlinkHref={`${Icons}#${props.icon}`} />
  </svg>
);

export default Icon;
