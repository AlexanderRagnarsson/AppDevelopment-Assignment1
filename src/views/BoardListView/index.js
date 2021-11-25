import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import BoardList from '../../components/BoardList';
import fileData from '../../resources/data.json';
import BoardModal from '../../components/BoardListModal';
import Toolbar from '../../components/Toolbar';

function Boards({ navigation: { navigate } }) {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const [data, setData] = useState(fileData);

  const submitFunc = (board) => {
    const { boards } = data;
    const nextId = boards.reduce((prev, curr) => (curr.id >= prev ? (curr.id + 1) : prev), 0);
    boards.push({ id: nextId, ...board });
    setData({
      ...data,
      boards,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Toolbar
        onAdd={() => setIsBoardModalOpen(true)}
        addString="Add board"
      />
      <Text>BOARDS:</Text>
      <BoardList
        {...{ ...data, navigate }}
      />
      <BoardModal
        isOpen={isBoardModalOpen}
        closeModal={() => setIsBoardModalOpen(false)}
        submit={submitFunc}
      />
    </View>
  );
}

Boards.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Boards;
