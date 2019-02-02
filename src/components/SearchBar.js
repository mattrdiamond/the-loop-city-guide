import React, { Component, PureComponent } from 'react';
import SearchButton from './SearchButton';

// PureComponent handles shouldComponentUpdate for you
class SearchBar extends PureComponent {
  constructor() {
    super();
    this.state = { showInput: false };
    this.toggleInput = this.toggleInput.bind(this);
  }

  toggleInput() {
    this.setState({ showInput: !this.state.showInput });
  }

  render() {
    const { showInput } = this.state;
    console.log('render searchBar');

    return (
      <div className="search-bar">
        <div className="nav-top">
          <SearchButton showInput={showInput} toggleInput={this.toggleInput} />
        </div>
        <div className={'input-container' + (showInput ? ' visible' : ' hidden')}>
          <input
            id="search-input"
            type="text"
            placeholder="Search..."
            onChange={this.props.handleFilterMarkers}
          />
          <span className="input-caption">Type to filter venues</span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
