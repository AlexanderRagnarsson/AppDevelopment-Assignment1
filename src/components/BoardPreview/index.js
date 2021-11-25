import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Animated, TouchableHighlight,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

function BoardPreview({
  board, navigate, deleteBoard,
}) {
  // const taskslists = tasks.filter((item) => item.listId in boardlists);
  // console.log(boardlists);
  // console.log(thumbnailPhoto);
  console.log(board);
  const {
    id, name, description = '', thumbnailPhoto,
  } = board;
  return (
    <View>
      <Text>{`${id} ${name} ${description} `}</Text>
      <TouchableHighlight
        onPress={() => navigate('Board', {
          board,
        })}
      >
        <Animated.Image
          style={styles.Image}
          source={{ uri: thumbnailPhoto }}
        />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => { deleteBoard(id); }}
      >
        <AntDesign name="delete" size={50} color="black" />
      </TouchableHighlight>
    </View>
  );
}

BoardPreview.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    name: PropTypes.string.isRequired,
    thumbnailPhoto: PropTypes.string.isRequired,
  }).isRequired,
  navigate: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
};

export default BoardPreview;
