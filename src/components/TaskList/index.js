import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, FlatList, TouchableHighlight,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Task from '../Task';
import styles from './styles';
import Toolbar from '../Toolbar';
import TaskModal from '../TaskModal';
import ListEditModal from '../ListEditModal';

function TaskList({
  list, lists, setLists, tasks,
}) {
  // The modal to add new tasks
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  // The modal the edit this tasklist
  const [isListEditModalOpen, setIsListEditModalOpen] = useState(false);
  // The current list
  const [listState, setList] = useState(list);
  // The task list
  const [tasksData, setTasksData] = useState(tasks);

  const {
    id, name, color, boardId,
  } = listState;

  // Adding the new task to the tasks
  const submitTask = (task) => {
    const nextId = tasksData.reduce((prev, curr) => (curr.id >= prev ? (curr.id + 1) : prev), 0);
    const taskListId = id;
    tasksData.push({ id: nextId, ...task, listId: taskListId });
    setTasksData(tasksData);
  };

  const listEditSubmit = async (newList) => {
    setLists([...lists.filter((listIt) => (listIt.id !== newList.id)), newList]);
    setList(newList);
  };

  const tasklist = tasksData.filter((item) => item.listId === id);
  return (
    <View>
      <TouchableHighlight
        onPress={() => { setIsListEditModalOpen(true); }}
      >
        <AntDesign name="edit" size={50} color="black" />
      </TouchableHighlight>
      <ListEditModal
        isOpen={isListEditModalOpen}
        closeModal={() => setIsListEditModalOpen(false)}
        submit={listEditSubmit}
        list={{
          id, name, color, boardId,
        }}
      />
      <Text>{`List: ${id}, Name: ${name}`}</Text>
      <Toolbar
        onAdd={() => setIsTaskModalOpen(true)}
        addString="Add task"
      />
      <TaskModal
        isOpen={isTaskModalOpen}
        closeModal={() => setIsTaskModalOpen(false)}
        submit={submitTask}
      />
      <FlatList
        numColumns={1}
        data={tasklist}
        renderItem={({ item }) => (
          <Task style={styles.Task} {...{ ...item }} />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
}

TaskList.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
    boardId: PropTypes.number,
  }).isRequired,
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  setLists: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskList;
