import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Animated, TouchableHighlight,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import BoardLists from '../../components/Board';
import styles from './styles';
import ListModal from '../../components/ListModal';
import BoardEditModal from '../../components/BoardEditModal';
import AddButton from '../../components/Addbutton';

function Board({ route }) {
  const { id } = route.params;
  const {
    boards, lists, isListModalOpen, isBoardEditModalOpen,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const setIsListModalOpen = (value) => {
    dispatch({ type: 'UPDATE_LIST_MODAL', payload: value });
  };

  const setIsBoardEditModalOpen = (value) => {
    dispatch({ type: 'UPDATE_BOARD_EDIT_MODAL', payload: value });
  };

  const {
    name, description = '', thumbnailPhoto,
  } = boards.filter((boardIt) => boardIt.id === id)[0];

  // Sumbit a new list
  const submitFunc = (newList) => {
    const nextId = lists.reduce((prev, curr) => (curr.id >= prev ? (curr.id + 1) : prev), 0);
    // setLists([{ id: nextId, ...newList, boardId: id },
    //   ...lists.filter((list) => (list.id !== newList.id))]);
    // theLists.push({ id: nextId, ...newList, boardId: id });
    // setLists(theLists);
    dispatch({ type: 'ADD_LIST', payload: { id: nextId, ...newList, boardId: id } });
  };

  const editSubmit = async (newBoard) => {
    // setBoards([newBoard, ...boards.filter((boardIt) => (boardIt.id !== newBoard.id))]);
    // setBoard(newBoard);
    dispatch({ type: 'EDIT_BOARD', payload: newBoard });
  };

  return (
    <View>
      <Text>
        {`${id} ${name} ${description}, To Edit board: `}
        <TouchableHighlight
          onPress={() => { setIsBoardEditModalOpen(true); }}
        >
          <AntDesign name="edit" size={30} color="black" />
        </TouchableHighlight>
        <AddButton
          onAdd={() => setIsListModalOpen(true)}
          addString=""
        />
      </Text>
      <Animated.Image
        style={styles.Image}
        source={{ uri: thumbnailPhoto }}
      />
      <BoardLists
        {...{
          id,
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
