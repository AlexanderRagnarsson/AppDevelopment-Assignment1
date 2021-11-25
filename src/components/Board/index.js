import React from 'react';
import PropTypes from 'prop-types';
import TaskList from '../TaskList';
import { FlatList, Text, View, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Board({
  id, name, description = '', thumbnailPhoto, data, tasks,
}) {
  // console.log(...tasks)
  const boardlists = data.filter((item) => item.boardId === id);
  return (
    <View>
      <TouchableHighlight>
        <AntDesign name="delete" size={50} color="black" />
      </TouchableHighlight>
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
