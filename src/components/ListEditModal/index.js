import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import {
  TextInput, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
import { Slider } from '@react-native-community/slider';
import Modal from '../Modal';
import styles from './styles';

function ListEditModal({
  list,
  isOpen,
  closeModal,
  title,
  submit,
}) {
  let setList = list;

  if (setList.id !== undefined) {
    const { lists } = useSelector((state) => state);
    [setList] = lists.filter((listIt) => listIt.id === setList.id);
  }

  const [inputs, setInputs] = useState(setList);

  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearInputs = () => {
    inputs.name = setList.name;
    inputs.color = setList.color;
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => { closeModal(); clearInputs(); }}
      title={title}
    >
      <TextInput
        styles={styles.textInput}
        placeholder="Enter the name of the List"
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
      <TriangleColorPicker
        color={inputs.color}
        onColorChange={(color) => { inputHandler('color', fromHsv(color)); }}
        style={{ flex: 1, width: '100%' }}
        hideControls
        sliderComponent={Slider}
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
  // The title
  title: PropTypes.string.isRequired,
  // Function to submit the new Board
  submit: PropTypes.func.isRequired,
};

export default ListEditModal;
