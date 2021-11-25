import React, { useState } from 'react';
import {
  FlatList, View,
} from 'react-native';
import PropTypes from 'prop-types';
import TaskList from '../TaskList';

function Board({
  id, name, description = '', thumbnailPhoto, data, tasks,
}) {
  // console.log(...tasks)
  const boardlists = data.filter((item) => item.boardId === id);

  const [theLists, setTheLists] = useState(boardlists);

  const deleteList = (listId) => {
    console.log(listId);
    console.log(theLists);
    setTheLists(theLists.filter((item) => (item.id !== listId)));
  };

  return (
    <View>
      <FlatList
        numColumns={1}
        data={theLists}
        renderItem={({ item }) => (
          <TaskList {...{ ...item, tasks, deleteList }} />
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Board.defaultProps = {
  description: '',
};

export default Board;
