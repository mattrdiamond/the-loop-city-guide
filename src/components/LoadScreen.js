import React, { Component } from 'react';
import Loading from '../images/star.svg';

export default class LoadScreen extends Component {
  render() {
    return (
      <div className="load-screen">
        {/*<img className="loading-image" src={Loading} />*/}
        <p>Loading...</p>
      </div>
    );
  }
}
