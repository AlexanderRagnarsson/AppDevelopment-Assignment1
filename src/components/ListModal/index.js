import React from 'react';
import PropTypes from 'prop-types';
import ListEditModal from '../ListEditModal';

function ListModal({
  isOpen,
  closeModal,
  submit,
}) {
  return (
    <ListEditModal
      list={{ name: '', color: 'blue' }}
      isOpen={isOpen}
      closeModal={closeModal}
      submit={submit}
    />
  );
}

ListModal.propTypes = {
  // Is the modal open or not
  isOpen: PropTypes.bool.isRequired,
  // Function to close the modal
  closeModal: PropTypes.func.isRequired,
  // Function to submit the new Board
  submit: PropTypes.func.isRequired,
};

export default ListModal;
