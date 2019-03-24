import React, { Component } from 'react';
import VenueList from './VenueList';
import SearchBar from './SearchBar';
import Icon from './Icon';
import CategoryBar from './CategoryBar';
import ListItemLoader from './ListItemLoader';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      visibleMarkers: []
    };
    this.handleFilterVenues = this.handleFilterVenues.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  // filter venues to match query value
  handleFilterVenues() {
    const {
      props: { venues },
      state: { query }
    } = this;

    if (query.trim() !== '') {
      const matchingVenues = venues.filter((venue) =>
        venue.name.toLowerCase().includes(query.toLowerCase().trim())
      );
      return matchingVenues;
    } else {
      return venues;
    }
  }

  // filter markers that match query value
  handleFilterMarkers = (e) => {
    const { venues, markers, updateSuperState } = this.props;
    this.setState({ query: e.target.value });

    // check each venue to see if it includes query value
    const showMarkers = venues.map((venue) => {
      const queryMatch = venue.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase().trim());

      // find corresponding marker
      const marker = markers.find((marker) => marker.id === venue.id);

      // set visible if marker matches query value
      queryMatch ? marker.setVisible(true) : marker.setVisible(false);
      return marker;
    });

    updateSuperState({ markers: showMarkers });
    this.didMarkersChange();
  };

  // check to see if number of markers changed before updating map bounds
  didMarkersChange() {
    const { markers, infoWindow, updateMapBounds } = this.props;
    const showingMarkers = markers.filter((marker) => marker.visible);

    // close infoWindow unless the map contains a single marker
    if (showingMarkers.length > 1 || showingMarkers.length === 0) {
      infoWindow.close();
    }

    // only update map bounds if the number of markers changed and the map contains markers
    if (
      showingMarkers.length !== this.state.visibleMarkers.length &&
      showingMarkers.length > 0
    ) {
      // update map bounds to fit visible markers
      updateMapBounds(showingMarkers);
    }
    // update visibleMarkers for next execution
    this.setState({ visibleMarkers: showingMarkers });
  }

  clearInput() {
    this.setState({ query: '' });
  }

  render() {
    const {
      handleFilterVenues,
      handleFilterMarkers,
      clearInput,
      props: {
        toggleSidebar,
        sidebarOpen,
        navKeyPress,
        handleListItemClick,
        listItemKeyPress,
        infoWindow,
        updateSuperState,
        category,
        loading,
        venues
      },
      state: { query }
    } = this;

    console.log('rendered sidebar');

    return (
      <section id="venue-sidebar" className={sidebarOpen ? 'visible' : 'hidden'}>
        <SearchBar
          toggleSidebar={toggleSidebar}
          sidebarOpen={sidebarOpen}
          navKeyPress={navKeyPress}
          handleFilterMarkers={handleFilterMarkers}
          query={query}
          clearInput={clearInput}
        />
        <div className="sidebar-wrapper">
          {/*--- Initial load: display loading components while fetching data ---*/}
          {loading && venues.length === 0 ? (
            <div className="loader-container">
              <ListItemLoader />
              <ListItemLoader />
              <ListItemLoader />
            </div>
          ) : (
            <VenueList
              handleListItemClick={handleListItemClick}
              listItemKeyPress={listItemKeyPress}
              infoWindow={infoWindow}
              venues={handleFilterVenues()}
              loading={loading}
            />
          )}
          <footer>
            <span className="attribution">Powered by</span>
            <Icon icon="foursquare" height="14px" />
            <span className="attribution">Foursquare</span>
          </footer>
        </div>
        <CategoryBar updateSuperState={updateSuperState} category={category}>
          <div label="food" />
          <div label="drinks" />
          <div label="coffee" />
          <div label="sights" />
        </CategoryBar>
      </section>
    );
  }
}
