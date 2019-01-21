// import React, { Component } from 'react';
import React from 'react';
import Icon from './Icon';

const SearchButton = ({ toggleInput, showInput }) => {
  const buttonText = showInput ? 'Close' : 'Search';
  return (
    <React.Fragment>
      <button
        id="search-button"
        className="search-button"
        onClick={toggleInput}
        aria-label="Show/hide search input field"
        aria-expanded={showInput}
        type="button"
      >
        {buttonText}
        <Icon icon="search" />
      </button>
    </React.Fragment>
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
