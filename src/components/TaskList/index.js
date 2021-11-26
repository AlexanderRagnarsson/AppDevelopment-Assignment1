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
  // // The modal to add new tasks
  // const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  // // The modal the edit this tasklist
  // const [isListEditModalOpen, setIsListEditModalOpen] = useState(false);
  // // The current list
  // const [listState, setList] = useState(list);
  // // The task list
  // const [tasksData, setTasksData] = useState(tasks);

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

  const tasklist = tasks.filter((item) => item.listId === id);
  return (
    <View>
      <TouchableHighlight
        onPress={() => { setIsListEditModalOpen(id); }}
      >
        <AntDesign name="edit" size={50} color="black" />
      </TouchableHighlight>
      <ListEditModal
        isOpen={isListEditModalOpen === id}
        closeModal={() => setIsListEditModalOpen(-1)}
        submit={listEditSubmit}
        list={{
          id, name, color, boardId,
        }}
      />
      <Text>{`List: ${id}, Name: ${name}, Color: ${color}, Belongs to board: ${boardId}`}</Text>
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
          <Task style={styles.Task} {...{ ...item }} />
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
