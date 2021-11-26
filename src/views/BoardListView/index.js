import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BoardList from '../../components/BoardList';
import BoardModal from '../../components/BoardModal';
import Toolbar from '../../components/Toolbar';

function Boards({ navigation: { navigate } }) {
  const { boards, isBoardModalOpen } = useSelector(
    (state) => (state),
  );
  const dispatch = useDispatch();

  const setIsBoardModalOpen = (value) => {
    dispatch({ type: 'UPDATE_BOARD_MODAL', payload: value });
  };

  const submitFunc = async ({ name, description, thumbnailPhoto }) => {
    const nextId = boards.reduce((prev, curr) => (curr.id >= prev ? (curr.id + 1) : prev), 0);
    // Wait to get the photo taken from the fileSystem
    Promise.resolve(thumbnailPhoto).then(
      (value) => {
        const board = {
          id: nextId, name, description, thumbnailPhoto: value,
        };

        dispatch({ type: 'ADD_BOARD', payload: board });
        // setBoards([...boards, board]);
      },
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Toolbar
        onAdd={() => setIsBoardModalOpen(true)}
        addString="Add board"
      />
      <Text>BOARDS:</Text>
      <BoardList
        {...{ navigate }}
      />
      <BoardModal
        isOpen={isBoardModalOpen}
        closeModal={() => setIsBoardModalOpen(false)}
        submit={submitFunc}
      />
    </View>
  );
}

Boards.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Boards;
