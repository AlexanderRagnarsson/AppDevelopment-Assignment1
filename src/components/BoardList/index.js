import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import BoardPreview from '../BoardPreview';
import styles from './styles';

function BoardList({
  boards, lists, tasks, navigate,
}) {
  return (
    <View styles={styles.listContainer}>
      <FlatList
        numColumns={1}
        data={boards}
        renderItem={({ item }) => (
          <BoardPreview {...{
            ...item, lists, tasks, navigate,
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
  boards: PropTypes.arrayOf(PropTypes.object).isRequired,
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoardList;
