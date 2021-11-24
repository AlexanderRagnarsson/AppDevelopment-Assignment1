import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

function Board({
  id, name, description = '', thumbnailPhoto, lists, tasks,
}) {
  return (
    <View>
      <Text>{`FFS: ${id} ${name} ${description}  ${thumbnailPhoto} THE LIST NAME: ${lists[0].name} `}</Text>
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
  navigate: PropTypes.number.isRequired,
};

Board.defaultProps = {
  description: '',
};

export default Board;
