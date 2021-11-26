import React, { useState } from 'react';
import {
  TextInput, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

function ListEditModal({
  list,
  isOpen,
  closeModal,
  submit,
}) {
  const [inputs, setInputs] = useState(list);

  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearInputs = () => {
    inputs.name = list.name;
    inputs.color = list.color;
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
        onPress={() => { submit(inputs); closeModal(); }}
      />
    </Modal>
  );
}

ListEditModal.propTypes = {
  // list
  list: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  // Is the modal open or not
  isOpen: PropTypes.bool.isRequired,
  // Function to close the modal
  closeModal: PropTypes.func.isRequired,
  // Function to submit the new Board
  submit: PropTypes.func.isRequired,
};

export default ListEditModal;
