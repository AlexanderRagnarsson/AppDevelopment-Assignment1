import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Animated } from 'react-native';
import TheBoard from '../../components/Board';
import styles from './styles';

function Board({ route }) {
  const { id } = route.params;
  const { name } = route.params;
  const { description } = route.params;
  const { thumbnailPhoto } = route.params;
  const { lists } = route.params;
  const { tasks } = route.params;

  return (
    <View>
      <Text>{`${id} ${name} ${description}`}</Text>
      <Animated.Image
        style={styles.Image}
        source={{ uri: thumbnailPhoto }}
      />
      <Text>NONONO</Text>
      <TheBoard
        {...{ id, name, description, thumbnailPhoto, lists, tasks }}
      // {...{ ...data, navigate }}
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
