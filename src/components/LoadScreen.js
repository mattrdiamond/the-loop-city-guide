import React, { Component } from 'react';
import loading from '../images/star.svg';

export default class LoadScreen extends Component {
  render() {
    return (
      <div className="load-screen">
        <img className="loading-image" src={loading} />
      </div>
    );
  }
}
