import React from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import TaskList from '../TaskList';

function Board({
  id, name, description = '', thumbnailPhoto, lists, tasks,
}) {
  const boardlists = lists.filter((item) => item.boardId === id);

  return (
    <View>
      <FlatList
        numColumns={1}
        data={boardlists}
        renderItem={({ item }) => (
          <TaskList {...{ ...item, tasks }} />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
}

Board.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  thumbnailPhoto: PropTypes.string.isRequired,
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Board.defaultProps = {
  description: '',
};

export default Board;
