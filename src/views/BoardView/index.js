import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Animated, TouchableHighlight,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import TheBoard from '../../components/Board';
import styles from './styles';
import BoardModal from '../../components/ListModal';
import Toolbar from '../../components/Toolbar';

function Board({ route }) {
  const {
    id, name, description, thumbnailPhoto, boards, lists, tasks, setBoards, setLists, setTasks,
  } = route.params;

  // Is the list creating modal open?
  const [isListModalOpen, setIsListModalOpen] = useState(false);

  // Edit the board
  const editBoard = (newBoard) => {
    setBoards([newBoard, ...boards.filter((board) => (board.id !== newBoard.id))]);
  };

  // Sumbit a new list
  const submitFunc = (newList) => {
    const nextId = lists.reduce((prev, curr) => (curr.id >= prev ? (curr.id + 1) : prev), 0);
    setLists([{ id: nextId, ...newList, boardId: id },
      ...lists.filter((list) => (list.id !== newList.id))]);
  };

  return (
    <View>
      <Toolbar
        onAdd={() => setIsListModalOpen(true)}
        addString="Add List"
      />
      <Text>{`${id} ${name} ${description}`}</Text>
      <Animated.Image
        style={styles.Image}
        source={{ uri: thumbnailPhoto }}
      />
      <TouchableHighlight
        onPress={() => { editBoard(); }}
      >
        <AntDesign name="delete" size={50} color="black" />
      </TouchableHighlight>
      <Text>Lists:</Text>
      <TheBoard
        {...{
          id, name, description, thumbnailPhoto, lists, tasks,
        }}
      />
      <BoardModal
        isOpen={isListModalOpen}
        closeModal={() => setIsListModalOpen(false)}
        submit={submitFunc}
      />
    </View>
  );
}

Board.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Board;
