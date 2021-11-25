import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  TouchableOpacity, TextInput, Button, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

function BoardModal({
  isOpen,
  closeModal,
  takePhoto,
  selectFromCameraRoll,
  submit,
}) {
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    thumbnailPhoto: 'https://i.ytimg.com/vi/m_PecfbEWik/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6fg81J4DQU-X6hIVmbneH0gTfbA',
  });

  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearInputs = () => {
    inputs.name = '';
    inputs.description = '';
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => { closeModal(); clearInputs(); }}
      title="Create a board"
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
          {'Take photo with camera '}
          <Entypo styles={styles.icon} name="camera" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => selectFromCameraRoll()}
      >
        <Text>
          {'Select photo form camera roll '}
          <Entypo styles={styles.icon} name="image" />
        </Text>
      </TouchableOpacity>
      <Button
        title="Submit"
        onPress={() => {
          submit(inputs);
          closeModal();
          clearInputs();
        }}
      />
    </Modal>
  );
}

BoardModal.propTypes = {
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

export default BoardModal;
