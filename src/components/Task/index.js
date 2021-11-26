import React from 'react';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
  View, Text, TouchableHighlight,
} from 'react-native';
import styles from './styles';
import TaskEditModal from '../TaskEditModal';
import DeleteModal from '../DeleteModal';
function Task({
  id,
}) {
  const {
    tasks, isTaskEditModalOpen, deleteTaskModalOpen,
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

  const setDeleteTaskModalOpen = (value) => {
    dispatch({ type: 'UPDATE_DELETE_TASK_MODAL', payload: value });
  };

  // console.log(name);
  // console.log(description);
  return (
    <View>
      <View style={styles.TaskText}>
        <BouncyCheckbox
          fillColor="green"
          // ref={(ref) => { bouncyCheckboxRef = ref; }}
          isChecked={isFinished}
          // text={name}
          disableBuiltInState
          onPress={() => taskEditSubmit({
            id, name, description, isFinished: !isFinished, listId,
          })}
        />
        <View style={styles.taskView}>
          <Text style={styles.taskName}>
            {`${name}`}
          </Text>
          <Text style={styles.taskDescription}>
            {`${description}`}
          </Text>

        </View>
        <View style={styles.allignRight}>
          <TouchableHighlight
            onPress={() => { setDeleteTaskModalOpen(id); }}
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
      <DeleteModal
        isOpen={deleteTaskModalOpen === id}
        closeModal={() => { setDeleteTaskModalOpen(-1); }}
        onConfirm={() => deleteTask(id)}
        itemName={` ${name}`}
      />
    </View>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Task;
