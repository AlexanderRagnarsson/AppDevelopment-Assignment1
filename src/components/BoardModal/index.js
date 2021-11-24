import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

function BoardModal({
  isOpen,
  closeModal,
  takePhoto,
  selectFromCameraRoll,
}) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <TouchableOpacity
        onPress={() => takePhoto()}
      >
        <Entypo styles={styles.icon} name="camera" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => selectFromCameraRoll()}
      >
        <Entypo styles={styles.icon} name="image" />
      </TouchableOpacity>
    </Modal>
  );
}

BoardModal.propTypes = {
  // Is the modal open or not
  isOpen: PropTypes.bool.isRequired,
  // Function to close the modal
  closeModal: PropTypes.func.isRequired,
  // Function to take a photo
  takePhoto: PropTypes.func.isRequired,
  // Function to select photo from camera roll
  selectFromCameraRoll: PropTypes.func.isRequired,
};

export default BoardModal;
