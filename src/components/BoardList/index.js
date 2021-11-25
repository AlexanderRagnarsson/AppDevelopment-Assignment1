import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import BoardPreview from '../BoardPreview';
import styles from './styles';

function BoardList({
  boards, setBoards, navigate,
}) {
  const deleteBoard = (boardId) => {
    setBoards(boards.filter((item) => (item.id !== boardId)));
  };

  return (
    <View styles={styles.listContainer}>
      <FlatList
        numColumns={1}
        data={boards}
        renderItem={({ item }) => (
          <BoardPreview {...{
            ...item, navigate, deleteBoard,
          }}
          />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
}

BoardList.propTypes = {
  navigate: PropTypes.func.isRequired,
  setBoards: PropTypes.func.isRequired,
  boards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoardList;
