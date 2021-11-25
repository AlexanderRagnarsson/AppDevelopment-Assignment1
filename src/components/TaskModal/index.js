import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  TouchableOpacity, TextInput, Button, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

function TaskModal({
  isOpen,
  closeModal,
  submit,
}) {
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    isFinished: false,
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
      title="Create a task"
    >
      <TextInput
        styles={styles.textInput}
        placeholder="Enter the name of the task"
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
      <TextInput
        styles={styles.textInput}
        placeholder="Enter the description of the task"
        value={inputs.description}
        onChangeText={(text) => inputHandler('description', text)}
      />
      <Button
        title="Submit"
        onPress={() => { submit(inputs); closeModal(); clearInputs(); }}
      />
    </Modal>
  );
}

TaskModal.propTypes = {
  // Is the modal open or not
  isOpen: PropTypes.bool.isRequired,
  // Function to close the modal
  closeModal: PropTypes.func.isRequired,
  // Function to submit the new Board
  submit: PropTypes.func.isRequired,
  // // Function to take a photo
  // takePhoto: PropTypes.func.isRequired,
  // // Function to select photo from camera roll
  // selectFromCameraRoll: PropTypes.func.isRequired,
};

export default TaskModal;
