import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  TouchableOpacity, TextInput, Button, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

function BoardEditModal({
  board,
  isOpen,
  closeModal,
  takePhoto,
  selectFromCameraRoll,
  submit,
}) {
  const [inputs, setInputs] = useState(board);
  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => { closeModal(); }}
      title="Edit the board"
    >
      <TextInput
        styles={styles.textInput}
        placeholder="Enter the name of the board"
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
      <TextInput
        styles={styles.textInput}
        placeholder="Enter the description of the board"
        value={inputs.description}
        onChangeText={(text) => inputHandler('description', text)}
      />
      <TouchableOpacity
        onPress={() => inputHandler('thumbnailPhoto', takePhoto())}
      >
        <Text>
          {'Take new photo with camera '}
          <Entypo styles={styles.icon} name="camera" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => selectFromCameraRoll()}
      >
        <Text>
          {'Select new photo form camera roll '}
          <Entypo styles={styles.icon} name="image" />
        </Text>
      </TouchableOpacity>
      <Button
        title="Submit"
        onPress={() => {
          submit(inputs);
          closeModal();
        }}
      />
    </Modal>
  );
}

BoardEditModal.propTypes = {
  // The board the we are currently editing
  board: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    thumbnailPhoto: PropTypes.string,
  }).isRequired,
  // Is the modal open or not
  isOpen: PropTypes.bool.isRequired,
  // Function to close the modal
  closeModal: PropTypes.func.isRequired,
  // Function to submit the new Board
  submit: PropTypes.func.isRequired,
  // Function to take a photo
  takePhoto: PropTypes.func.isRequired,
  // Function to select photo from camera roll
  selectFromCameraRoll: PropTypes.func.isRequired,
};

export default BoardEditModal;
