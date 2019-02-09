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
