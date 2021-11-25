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

  // Adding a new image for the board
  const addImage = async (photo) => {
    const newImage = await fileService.addImage(photo);
    return newImage.filename;
  };

  // Taking a photo for the board in the edit
  const takePhoto = async () => {
    let photo = await imageService.takePhoto();

    if (photo.length > 0) {
      photo = await addImage(photo);
    }

    return photo;
  };

  // Submit the edit to the board
  const submitEdit = async (boardIn) => {
    // Wait to get the photo taken from the fileSystem
    Promise.resolve(thumbnailPhoto).then(
      (value) => {
        const newBoard = { ...boardIn, thumbnailPhoto: value };
        setBoards([newBoard, ...boards.filter((boardIt) => (boardIt.id !== newBoard.id))]);
        setBoard(newBoard);
      },
    );
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
        takePhoto={takePhoto}
        selectFromCameraRoll={() => {}}
        submit={submitEdit}
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
