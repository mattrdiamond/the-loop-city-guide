import React, { PureComponent } from 'react';

export default class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
  }

  componentDidMount() {
    if (!window.google) {
      const API_KEY = 'AIzaSyCHE01dQ6hdkOBP0qxkzYdTCJdhYesX8gY';
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://maps.google.com/maps/api/js?key=${API_KEY}`;
      script.onerror = () => alert('Unable to load Google Maps');
      const firstScriptTag = document.getElementsByTagName('script')[0];
      // Insert new script node before first script tag
      firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
      //Important: cannot access google.maps until it's finished loading
      script.addEventListener('load', (e) => {
        console.log('A. map script loaded');
      });
    }
  }

  handleCloseSidebar() {
    if (window.innerWidth < 600) {
      this.props.closeSidebar();
    }
  }

  render() {
    const {
      handleCloseSidebar,
      props: { id, sidebarOpen }
    } = this;

    return (
      <section
        id="map"
        className={sidebarOpen ? 'pad-left' : ''}
        onClick={handleCloseSidebar}
      >
        <div role="application" aria-hidden="true" id={id} />
      </section>
    );
  }
}
