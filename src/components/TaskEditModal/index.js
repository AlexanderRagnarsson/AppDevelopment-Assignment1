import React, { useState } from 'react';
import {
  TextInput, Button,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

function TaskEditModal({
  task,
  isOpen,
  closeModal,
  title,
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
    inputs.name = task.name;
    inputs.description = task.description;
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => { closeModal(); clearInputs(); }}
      title={title}
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
        onPress={() => { submit(inputs); closeModal(); }}
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
  // The title
  title: PropTypes.string.isRequired,
  // Function to submit the new Board
  submit: PropTypes.func.isRequired,
};
export default TaskEditModal;
