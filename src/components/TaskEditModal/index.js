import { useSelector } from 'react-redux';
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
  let setTask = task;

  const { lists, tasks } = useSelector((state) => state);

  if (setTask.id !== undefined) {
    [setTask] = tasks.filter((taskIt) => taskIt.id === setTask.id);
  }

  const [inputs, setInputs] = useState(setTask);

  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearInputs = () => {
    inputs.name = setTask.name;
    inputs.description = setTask.description;
    inputs.isFinished = setTask.isFinished;
  };

  console.log('HERE');

  const findBoardIdList = lists.filter((item) => item.id === setTask.listId)[0];

  console.log(findBoardIdList);
  console.log(lists);

  const correctLists = lists.filter((item) => item.boardId === findBoardIdList.boardId);

  console.log(correctLists);

  const [dropDownOpen, setOpen] = useState(false);

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
      <DropDownPicker
        schema={{
          label: 'name',
          value: 'id',
        }}
        open={dropDownOpen}
        value={inputs.listId}
        items={correctLists}
        setOpen={setOpen}
        setValue={(text) => inputHandler('listId', text)}
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
