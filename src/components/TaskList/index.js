import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, FlatList, TouchableHighlight,
} from 'react-native';
import Task from '../Task';
import styles from './styles';
import Toolbar from '../Toolbar';
import TaskModal from '../TaskModal';



function TaskList({
  id, name, color, boardId, tasks,
}) {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [data, setData] = useState(tasks);
  // console.log(data);
  const submitFunc = (task) => {
    const nextId = data.reduce((prev, curr) => (curr.id >= prev ? (curr.id + 1) : prev), 0);
    const taskListId = id;
    data.push({ id: nextId, ...task, listId: taskListId });
    setData(data);
  };


  const tasklist = tasks.filter((item) => item.listId === id);
  return (
    <View>
      <Text>{`List: ${id}, Name: ${name}`}</Text>
      <Toolbar
        onAdd={() => setIsTaskModalOpen(true)}
        addString="Add task"
      />
      <TaskModal
        isOpen={isTaskModalOpen}
        closeModal={() => setIsTaskModalOpen(false)}
        submit={submitFunc}
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

export default TaskList;
