import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import Board from '../Board';

function BoardList({ boards, lists, tasks }) {
  return (
    <View>
      <FlatList
        numColumns={1}
        data={boards}
        renderItem={({ item }) => (
          <Board {...{ ...item, lists, tasks }} />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
}

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object).isRequired,
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoardList;
