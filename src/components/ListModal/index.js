import React, { useState } from 'react';
import {
  TextInput, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

function BoardModal({
  isOpen,
  closeModal,
  submit,
}) {
  const [inputs, setInputs] = useState({
    name: '',
    color: 'blue',
  });

  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearInputs = () => {
    inputs.name = '';
    inputs.color = '';
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => { closeModal(); clearInputs(); }}
      title="Create a list"
    >
      <TextInput
        styles={styles.textInput}
        placeholder="Enter the name of the List"
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
      <TextInput
        styles={styles.textInput}
        placeholder="Enter the color of the board"
        value={inputs.color}
        onChangeText={(text) => inputHandler('color', text)}
      />
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
};

export default BoardModal;
