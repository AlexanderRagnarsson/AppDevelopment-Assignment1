import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import TaskList from '../TaskList';

function Board({
  id,
}) {
  const { lists } = useSelector((state) => state);
  const boardlists = lists.filter((item) => item.boardId === id);

  return (
    <View>
      <FlatList
        numColumns={1}
        data={boardlists}
        renderItem={({ item }) => (
          <TaskList {...{ id: item.id }} />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
}

Board.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Board;
