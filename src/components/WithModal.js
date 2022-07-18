import React, { useState } from 'react';

const WithModal =
  ({ Modal, showModal }) =>
  (WrappedComponent) =>
  ({ ...otherProps }) => {
    const [modalOpen, setModalOpen] = useState(showModal);

    return modalOpen ? (
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default WithModal;
