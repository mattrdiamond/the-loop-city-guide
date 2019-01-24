// import React, { Component } from 'react';
import React from 'react';
import Icon from './Icon';

const SearchButton = ({ toggleInput, showInput }) => {
  const buttonText = showInput ? 'Close' : 'Search';
  return (
    <button
      id="search-button"
      className={'search-button' + (showInput ? ' expanded' : '')}
      onClick={toggleInput}
      aria-label={(showInput ? 'Hide' : 'Show') + ' search input'}
      aria-expanded={showInput}
      type="button"
    >
      <Icon icon="search" />
      {buttonText}
    </button>
  );
};

export default SearchButton;

// class SearchButton extends Component {
//   constructor() {
//     super();
//     this.state = { showInput: false };
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <button
//           id="search-button"
//           className="test"
//           onMouseDown={this.props.toggleInput}
//           Filter
//         />
//         <Icon icon="search" />
//       </React.Fragment>
//     )
//   }
// }

// export default SearchButton;
