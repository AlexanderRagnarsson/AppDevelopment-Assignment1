import React from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import TaskList from '../TaskList';

function Board({
  id, lists, setLists, tasks,
}) {
  const boardlists = lists.filter((item) => item.boardId === id);

  return (
    <View>
      <FlatList
        numColumns={1}
        data={boardlists}
        renderItem={({ item }) => (
          <TaskList {...{ list: item, lists, setLists, tasks }} />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
}

Board.propTypes = {
  id: PropTypes.number.isRequired,
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Board;
