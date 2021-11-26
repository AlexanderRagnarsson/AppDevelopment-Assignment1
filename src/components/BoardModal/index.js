import React from 'react';
import PropTypes from 'prop-types';
import BoardEditModal from '../BoardEditModal';

function BoardModal({
  isOpen,
  closeModal,
  submit,
}) {
  const board = {
    name: '',
    description: '',
    thumbnailPhoto: 'https://i.ytimg.com/vi/m_PecfbEWik/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6fg81J4DQU-X6hIVmbneH0gTfbA',
  };

  return (
    <BoardEditModal
      board={board}
      isOpen={isOpen}
      closeModal={closeModal}
      submit={submit}
    />
  );
}

BoardModal.propTypes = {
  // Is the modal open or not
  isOpen: PropTypes.bool.isRequired,
  // Function to close the modal
  closeModal: PropTypes.func.isRequired,
  // Function to submit the new Board
  submit: PropTypes.func.isRequired,
};

export default BoardModal;
