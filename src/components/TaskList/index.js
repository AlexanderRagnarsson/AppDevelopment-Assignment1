import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, FlatList, TouchableHighlight,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import Task from '../Task';
import styles from './styles';
import Toolbar from '../Toolbar';
import TaskModal from '../TaskModal';
import ListEditModal from '../ListEditModal';

function TaskList({
  id,
}) {
  // Yes
  const {
    lists, tasks, isTaskModalOpen, isListEditModalOpen,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    name, color, boardId,
  } = lists.filter((list) => list.id === id)[0];

  const setIsListEditModalOpen = (value) => {
    dispatch({ type: 'UPDATE_LIST_EDIT_MODAL', payload: value });
  };

  const setIsTaskModalOpen = (value) => {
    dispatch({ type: 'UPDATE_TASK_MODAL', payload: value });
  };

  // Adding the new task to the tasks
  const submitTask = (task) => {
    const nextId = tasks.reduce((prev, curr) => (curr.id >= prev ? (curr.id + 1) : prev), 0);
    // const taskListId = id;
    // tasksData.push({ id: nextId, ...task, listId: taskListId });
    // setTasksData(tasksData);
    dispatch({ type: 'ADD_TASK', payload: { id: nextId, ...task, listId: id } });
  };

  const listEditSubmit = async (newList) => {
    // setLists([...lists.filter((listIt) => (listIt.id !== newList.id)), newList]);
    // setList(newList);
    dispatch({ type: 'EDIT_LIST', payload: newList });
  };

  const deleteList = (listId) => {
    dispatch({ type: 'DELETE_LIST', payload: listId });
    // setBoards(boards.filter((item) => (item.id !== boardId)));
  };

  const tasklist = tasks.filter((item) => item.listId === id);
  return (
    <View>
      <TouchableHighlight
        onPress={() => { setIsListEditModalOpen(id); }}
      >
        <AntDesign name="edit" size={30} color="black" />
      </TouchableHighlight>
      <ListEditModal
        isOpen={isListEditModalOpen === id}
        closeModal={() => setIsListEditModalOpen(-1)}
        submit={listEditSubmit}
        title="Edit the task"
        list={{
          id, name, color, boardId,
        }}
      />
      <Text>
        {`List: ${id}, Name: ${name}, Color: ${color}, Belongs to board: ${boardId}`}
        <TouchableHighlight
          onPress={() => { deleteList(id); }}
        >
          <AntDesign name="delete" size={20} color="black" />
        </TouchableHighlight>
      </Text>
      <Toolbar
        onAdd={() => setIsTaskModalOpen(id)}
        addString="Add task"
      />
      <TaskModal
        isOpen={isTaskModalOpen === id}
        closeModal={() => setIsTaskModalOpen(-1)}
        submit={submitTask}
      />
      <FlatList
        numColumns={1}
        data={tasklist}
        renderItem={({ item }) => (
          <Task style={styles.Task} {...{ id: item.id }} />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
}

TaskList.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TaskList;
