import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text,
} from 'react-native';
import styles from './styles';

/*  import styles from './styles';
import Task from '../Task'; */

function Task({
  id, name, description, isFinished, listId,
}) {
  // console.log(name);
  // console.log(description);
  const finstatus = isFinished ? 'Finished!' : 'Not finished';
  return (
    <View>
      <Text style={styles.TaskText}>{`id: ${id}, Name: ${name}, Descr: ${description}, Status:  ${finstatus}`}</Text>
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
