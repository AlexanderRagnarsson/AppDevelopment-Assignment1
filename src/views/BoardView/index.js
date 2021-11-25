import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Animated, TouchableHighlight,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import BoardLists from '../../components/Board';
import styles from './styles';
import ListModal from '../../components/ListModal';
import Toolbar from '../../components/Toolbar';
import BoardEditModal from '../../components/BoardEditModal';
import * as imageService from '../../services/imageService';
import * as fileService from '../../services/fileService';

function Board({ route }) {
  const {
    board, boards, lists, tasks, setBoards, setLists, setTasks,
  } = route.params;

  // Is the list creating modal open?
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  // Is the board editing modal open?
  const [isBoardEditModalOpen, setIsBoardEditModalOpen] = useState(false);
  // The current Board
  const [boardState, setBoard] = useState(board);

  const {
    id, name, description = '', thumbnailPhoto,
  } = boardState;

  const [theLists] = useState(lists);

  // Sumbit a new list
  const submitFunc = (newList) => {
    const nextId = theLists.reduce((prev, curr) => (curr.id >= prev ? (curr.id + 1) : prev), 0);
    const theboardId = id;
    // setLists([{ id: nextId, ...newList, boardId: id },
    //   ...lists.filter((list) => (list.id !== newList.id))]);
    theLists.push({ id: nextId, ...newList, boardId: theboardId });
    setLists(theLists);
  };

  const editSubmit = async (newBoard) => {
    setBoards([newBoard, ...boards.filter((boardIt) => (boardIt.id !== newBoard.id))]);
    setBoard(newBoard);
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
        onPress={() => { setIsBoardEditModalOpen(true); }}
      >
        <AntDesign name="edit" size={50} color="black" />
      </TouchableHighlight>
      <Text>Lists:</Text>
      <BoardLists
        {...{
          id, lists: theLists, tasks,
        }}
      />
      <ListModal
        isOpen={isListModalOpen}
        closeModal={() => setIsListModalOpen(false)}
        submit={submitFunc}
      />
      <BoardEditModal
        isOpen={isBoardEditModalOpen}
        closeModal={() => setIsBoardEditModalOpen(false)}
        submit={editSubmit}
        board={{
          id, name, description, thumbnailPhoto,
        }}
      />
    </View>
  );
}

Board.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Board;
