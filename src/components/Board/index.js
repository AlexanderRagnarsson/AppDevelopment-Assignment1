import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Board({
  id, name, description = '', thumbnailPhoto, lists, tasks,
}) {
  return (
    <View>
      <TouchableHighlight>
        <AntDesign name="delete" size={50} color="black" />
      </TouchableHighlight>
      <Text>{`FFS: ${id} ${name} ${description}  ${thumbnailPhoto} `}</Text>
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
