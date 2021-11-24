import React from 'react';
import PropTypes from 'prop-types';
import {
  View, FlatList, Text, Image,
} from 'react-native';

function Board({
  id, name, description = '', thumbnailPhoto, lists, tasks,
}) {
  const boardlists = lists.filter((item) => item.boardId === id);
  return (
    <View>
      <Text>{`${id} ${name} ${description}`}</Text>
      <Image
        source={{ uri: thumbnailPhoto }}
      />
      <FlatList
        numColumns={3}
        data={boardlists}
        renderItem={({ item }) => (
          <Text style={
            { color: item.color }
            }
          >
            {`${item.id} ${item.name}`}
          </Text>
          // TODO: render Board here
          // <Board {...item} />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
}

Board.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired,
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Board.defaultProps = {
  description: '',
};

export default Board;
