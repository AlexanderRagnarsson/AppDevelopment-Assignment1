import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Animated, TouchableHighlight,
} from 'react-native';
import styles from './styles';

function BoardPreview({
  id, name, description = '', thumbnailPhoto, lists, tasks, navigate,
}) {
  // const taskslists = tasks.filter((item) => item.listId in boardlists);
  // console.log(boardlists);
  return (
    <View>
      <Text>{`${id} ${name} ${description} `}</Text>
      <TouchableHighlight
        onPress={() => navigate('Board', {
          ...{
            id, name, description, thumbnailPhoto, lists: lists, tasks: tasks,
          },
        })}
      >
        <Animated.Image
          style={styles.Image}
          source={{ uri: thumbnailPhoto }}
        />
      </TouchableHighlight>
    </View>
  );
}

BoardPreview.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired,
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigate: PropTypes.func.isRequired,
};

BoardPreview.defaultProps = {
  description: '',
};

export default BoardPreview;
