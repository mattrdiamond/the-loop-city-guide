import React from 'react';
import Icons from '../images/icons.svg';

// const Icon = (props) => (
//   <svg
//     className={`icon icon-${props.icon}`}
//     role="img"
//     height={props.height || '15px'}
//     width={props.width || '15px'}
//     aria-label={props.icon + ' icon'}
//   >
//     <title>{props.icon + ' icon'}</title>
//     <use href={`${Icons}#${props.icon}`} />
//   </svg>
// );

// export default Icon;

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
