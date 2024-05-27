import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div className={`modal ${isOpen ? 'modal-open' : 'modal-closed'}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <h2>Confirm Download</h2>
        <p>Are you sure you want to download the CV?</p>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
