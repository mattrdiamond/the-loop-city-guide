import React, { PureComponent } from 'react';
import SearchButton from './SearchButton';

// PureComponent handles shouldComponentUpdate for you
export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showInput: false };
    this.toggleInput = this.toggleInput.bind(this);
  }

  toggleInput() {
    this.setState({ showInput: !this.state.showInput });
  }

  render() {
    const {
      toggleInput,
      props: { handleFilterMarkers, query, clearInput },
      state: { showInput }
    } = this;

    console.log('render searchBar');

    return (
      <div className="search-bar">
        <div className="nav-top">
          <SearchButton showInput={showInput} toggleInput={toggleInput} />
        </div>
        <div className={'input-container' + (showInput ? ' visible' : ' hidden')}>
          <input
            id="search-input"
            type="text"
            placeholder="Search..."
            onChange={handleFilterMarkers}
            tabIndex={showInput ? 0 : -1}
            value={query}
          />
          <span className={'input-caption' + (!query ? ' active' : '')}>
            Type to filter venues
          </span>
          <button
            className={'clear-input' + (query ? ' active' : '')}
            onClick={clearInput}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}
