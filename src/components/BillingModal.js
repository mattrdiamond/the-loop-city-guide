import React from 'react';
import Icon from './Icon';

export default function BillingModal({ modalOpen, setModalOpen }) {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="icon-wrapper">
          <Icon icon="logo" />
        </div>
        <h1>Notice:</h1>
        <p>
          The Google Maps API is no longer free. The map in this app does not have billing
          enabled, so it is displayed in development mode. Aside from the watermark, the
          map functionality is the same. Please ignore any alerts from Google.
        </p>
        <button className="modal-btn" onClick={() => setModalOpen(!modalOpen)}>
          Continue
        </button>
      </div>
    </div>
  );
}
