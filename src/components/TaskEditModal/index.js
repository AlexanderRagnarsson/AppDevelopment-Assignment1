import React, { useState } from 'react';
import {
  TextInput, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

function TaskEditModal({
  task,
  isOpen,
  closeModal,
  submit,
}) {
  const [inputs, setInputs] = useState(task);

  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearInputs = () => {
    inputs.name = '';
    inputs.description = '';
    inputs.isFinished = false;
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => { closeModal(); clearInputs(); }}
      title="Update a task"
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

TaskEditModal.propTypes = {
  // list
  task: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    isFinished: PropTypes.bool,
  }).isRequired,
  // Is the modal open or not
  isOpen: PropTypes.bool.isRequired,
  // Function to close the modal
  closeModal: PropTypes.func.isRequired,
  // Function to submit the new Board
  submit: PropTypes.func.isRequired,
};
export default TaskEditModal;
