import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Animated } from 'react-native';
import TheBoard from '../../components/Board';
import styles from './styles';

function Board({ route }) {
  const {
    id, name, description, thumbnailPhoto, lists, tasks,
  } = route.params;

  return (
    <View>
      <Text>{`${id} ${name} ${description}`}</Text>
      <Animated.Image
        style={styles.Image}
        source={{ uri: thumbnailPhoto }}
      />
      <Text>NONONO</Text>
      <TheBoard
        {...{
          id, name, description, thumbnailPhoto, lists, tasks,
        }}
      // {...{ ...data, navigate }}
      />
    </View>
  );
}

Board.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Board;
