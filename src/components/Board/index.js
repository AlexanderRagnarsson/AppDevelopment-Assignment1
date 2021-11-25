import React from 'react';
import PropTypes from 'prop-types';
import TaskList from '../TaskList';
import { FlatList, Text, View, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Board({
  id, name, description = '', thumbnailPhoto, lists, tasks,
}) {
  // console.log(...tasks)
  return (
    <View>
      <TouchableHighlight>
        <AntDesign name="delete" size={50} color="black" />
      </TouchableHighlight>
      <FlatList
        numColumns={1}
        data={lists}
        renderItem={({ item }) => (
          <TaskList {...{ ...item, tasks }} />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
}

/*<Text>{`FFS: ${id} ${name} ${description}  ${thumbnailPhoto} THE LIST NAME: ${lists[0].name} `}</Text>*/
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
