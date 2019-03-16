import React, { Component } from 'react';
import VenueList from './VenueList';
import SearchBar from './SearchBar';
import Icon from './Icon';
import CategoryBar from './CategoryBar';
import ListItem from './ListItem';
import ListItemLoader from './ListItemLoader';

export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      visibleMarkers: []
    };
    this.handleFilterVenues = this.handleFilterVenues.bind(this);
  }

  // Only update if number of markers/venues changes
  // shouldComponentUpdate(nextState, nextProps) {
  //   if (
  //     !this.props.loading &&
  //     nextProps.visibleMarkers.length === this.state.visibleMarkers.length
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }

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
    const { markers, infoWindow } = this.props;
    const showingMarkers = markers.filter((marker) => marker.visible);

    // close infoWindow unless the map contains a single marker
    if (showingMarkers.length > 1) {
      infoWindow.close();
    }

    // only update map bounds if the number of markers changed and the map contains markers
    if (
      showingMarkers.length !== this.state.visibleMarkers.length &&
      showingMarkers.length > 0
    ) {
      // update map bounds to fit visible markers
      this.props.updateMapBounds(showingMarkers);
    }
    // update visibleMarkers for next execution
    this.setState({ visibleMarkers: showingMarkers });
  }

  render() {
    const {
      handleFilterVenues,
      handleFilterMarkers,
      props: {
        toggleSidebar,
        sidebarOpen,
        navKeyPress,
        handleListItemClick,
        listItemKeyPress,
        infoWindow,
        updateSuperState,
        category
      }
    } = this;
    console.log('rendered sidebar');

    return (
      <section id="venue-sidebar" className={sidebarOpen ? 'visible' : 'hidden'}>
        <SearchBar
          toggleSidebar={toggleSidebar}
          sidebarOpen={sidebarOpen}
          navKeyPress={navKeyPress}
          handleFilterMarkers={handleFilterMarkers}
        />
        <div className="sidebar-wrapper">
          {/*--- Initial load: display loading component until fetch complete ---*/}
          {this.props.loading && this.props.venues.length === 0 ? (
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
              loading={this.props.loading}
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
