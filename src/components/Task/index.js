import React from 'react';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
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
  const finstatus = isFinished ? 'Finished!' : 'Not finished';
  return (
    <View>
      <View style={styles.TaskText}>
        <Text style={ {flex: 0.9} }>
          {`${name}, Descr: ${description}, Status:  ${finstatus}  `}
        </Text>
        <View style={styles.allignRight}>
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
        </View>
      </View>
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
};

export default Task;
