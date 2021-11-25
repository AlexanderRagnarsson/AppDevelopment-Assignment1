import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, FlatList, TouchableHighlight,
} from 'react-native';
import Task from '../Task';
import styles from './styles';

function TaskList({ id, name, color, boardId, tasks }) {
  const tasklist = tasks.filter((item) => item.listId === id);
  return (
    <View>
      <Text>{`List: ${id}, Name: ${name}`}</Text>
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