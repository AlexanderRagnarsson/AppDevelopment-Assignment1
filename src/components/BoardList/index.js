import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import BoardPreview from '../BoardPreview';
import styles from './styles';

function BoardList({ navigate }) {
  const boards = useSelector((state) => state.boards);

  return (
    <View styles={styles.listContainer}>
      <FlatList
        numColumns={1}
        data={boards}
        renderItem={({ item }) => (
          <BoardPreview {...{
            board: item, navigate,
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
};

export default BoardList;
