import React from 'react';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, Text, TouchableHighlight,
} from 'react-native';
import styles from './styles';

/*  import styles from './styles';
import Task from '../Task'; */

function Task({
  id, name, description, isFinished, listId,
}) {
  const {
    tasks
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteTask = (thelistId) => {
    dispatch({ type: 'DELETE_TASK', payload: thelistId });
    // setBoards(boards.filter((item) => (item.id !== boardId)));
  };

  // console.log(name);
  // console.log(description);
  const finstatus = isFinished ? 'Finished!' : 'Not finished';
  return (
    <View>
      <Text style={styles.TaskText}>
        {`id: ${id}, Name: ${name}, Descr: ${description}, Status:  ${finstatus}  `}
        {`Delete task with id: ${id}  `}
        <TouchableHighlight
          onPress={() => { deleteTask(id); }}
        >
          <AntDesign name="delete" size={20} color="black" />
        </TouchableHighlight>
      </Text>
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
