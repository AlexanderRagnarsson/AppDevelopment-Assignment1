import React from 'react';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  View, Text, TouchableHighlight,
} from 'react-native';
import styles from './styles';
import TaskEditModal from '../TaskEditModal';

/*  import styles from './styles';
import Task from '../Task'; */

function Task({
  id,
}) {
  const {
    tasks, isTaskEditModalOpen,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    name, description, isFinished, listId,
  } = tasks.filter((list) => list.id === id)[0];

  const deleteTask = (thelistId) => {
    dispatch({ type: 'DELETE_TASK', payload: thelistId });
    // setBoards(boards.filter((item) => (item.id !== boardId)));
  };

  const taskEditSubmit = async (newTask) => {
    // setLists([...lists.filter((listIt) => (listIt.id !== newList.id)), newList]);
    // setList(newList);
    dispatch({ type: 'EDIT_TASK', payload: newTask });
  };

  const setIsTaskEditModalOpen = (value) => {
    dispatch({ type: 'UPDATE_TASK_EDIT_MODAL', payload: value });
  };

  // console.log(name);
  // console.log(description);
  return (
    <View>
      <BouncyCheckbox
        style={{ marginTop: 16 }}
        fillColor="green"
        ref={(ref: any) => (bouncyCheckboxRef = ref)}
        isChecked={isFinished}
        text={name}
        disableBuiltInState
        onPress={() => taskEditSubmit({id:id, name:name, description:description, isFinished:!isFinished, listId:listId})}
      />
      <Text style={styles.TaskText}>
        {`id: ${id}, Descr: ${description}`}
        {`Delete task with id: ${id}  `}
        <TouchableHighlight
          onPress={() => { deleteTask(id); }}
        >
          <AntDesign name="delete" size={20} color="black" />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => { setIsTaskEditModalOpen(id); }}
        >
          <AntDesign name="edit" size={20} color="black" />
        </TouchableHighlight>
      </Text>
      <TaskEditModal
        isOpen={isTaskEditModalOpen === id}
        closeModal={() => setIsTaskEditModalOpen(-1)}
        submit={taskEditSubmit}
        title="Edit the task"
        task={{
          id, name, description, isFinished, listId,
        }}
      />
    </View>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
  listId: PropTypes.number.isRequired,
};

export default Task;
