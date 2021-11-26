import React from 'react';
import { Text, Button } from 'react-native';
import Modal from '../Modal';

function DeleteModal({
  isOpen, closeModal, itemName, onConfirm,
}) {
  console.log("modal here: ", closeModal);
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



export default DeleteModal;
