import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Animated } from 'react-native';
import TheBoard from '../../components/Board';
import styles from './styles';
import BoardModal from '../../components/ListModal';
import Toolbar from '../../components/Toolbar';

function Board({ route }) {
  const {
    id, name, description, thumbnailPhoto, lists, tasks,
  } = route.params;

  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const [data, setData] = useState(lists);

  console.log(data);

  const submitFunc = (list) => {
    const nextId = data.reduce((prev, curr) => (curr.id >= prev ? (curr.id + 1) : prev), 0);
    const theboardId = id;
    data.push({ id: nextId, ...list, boardId: theboardId });
    setData(data);
  };

  return (
    <View>
      <Toolbar
        onAdd={() => setIsBoardModalOpen(true)}
        addString="Add List"
      />
      <Text>{`${id} ${name} ${description}`}</Text>
      <Animated.Image
        style={styles.Image}
        source={{ uri: thumbnailPhoto }}
      />
      <Text>Lists:</Text>
      <TheBoard
        {...{
          id, name, description, thumbnailPhoto, data, tasks,
        }}
      />
      <BoardModal
        isOpen={isBoardModalOpen}
        closeModal={() => setIsBoardModalOpen(false)}
        submit={submitFunc}
      />
    </View>
  );
}

Board.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Board;
