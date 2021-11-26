import React from 'react';
import { Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';

function DeleteModal({
  isOpen, closeModal, itemName, onConfirm,
}) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Confirm deletion"
    >
      <Text>
        Are you sure you want to delete
        {itemName}
      </Text>
      <Button
        title="Confirm"
        onPress={() => { onConfirm(); closeModal(); }}
      />

    </Modal>
  );
}

DeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  itemName: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default DeleteModal;
