import React, { Component } from 'react';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
    this.handleFilterMarkers = this.handleFilterMarkers.bind(this);
  }

  // ***************************
  // temp: flickr api
  // componentDidMount() {
  //   this.fetchFlickrPhotos();
  // }

  // fetchFlickrPhotos() {
  //   const flickrAPI =
  //     'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a36c582d1235b067617741153706792e&tags=records&per_page=10&page=1&format=json&nojsoncallback=1';

  //   fetch(flickrAPI)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const picArray = data.photos.photo.map((pic) => {
  //         const srcPath =
  //           'https://farm' +
  //           pic.farm +
  //           '.staticflickr.com/' +
  //           pic.server +
  //           '/' +
  //           pic.id +
  //           '_' +
  //           pic.secret +
  //           '.jpg';
  //         return <img alt="records" src={srcPath} />;
  //       });
  //       this.setState({ pictures: picArray });
  //     });
  // }

  // ***************************

  handleFilterMarkers(e) {
    this.props.filterMarkers(e.target.value);
  }

  render() {
    // Filter venues list
    const filteredList = this.props.venues.filter((place) => {
      return place.venue.name.toLowerCase().includes(this.props.queryValue.toLowerCase());
    });

    // Sort list alphabetically
    filteredList.sort((a, b) => {
      if (a.venue.name < b.venue.name) return -1;
      if (a.venue.name > b.venue.name) return 1;
      return 0;
    });

    return (
      <div id="sidebar">
        <input
          type="text"
          placeholder="Search"
          value={this.props.query}
          onChange={this.handleFilterMarkers}
        />
        <ul>
          {filteredList.map((venue, index) => (
            <li key={index}>{venue.venue.name}</li>
          ))}
        </ul>
        <p>{this.state.pictures}</p>
      </div>
    );
  }
}

export default SideBar;
