import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, FlatList, TouchableHighlight,
} from 'react-native';
import styles from './styles';
//import styles from './styles';
//import Task from '../Task';

function Task({ id, name, description, isFinished, listId }) {
  // console.log(name);
  // console.log(description);
  return (
    <View>
      <Text style={styles.TaskText}>{`id: ${id} name: ${name} descr: ${description}`}</Text>
    </View>
  );
}

export default Task;