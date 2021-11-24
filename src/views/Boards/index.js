import React, { useState } from 'react';
import { View, Text } from 'react-native';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import BoardModal from '../../components/BoardModal';

function Boards() {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  return (
    <View>
      <Text>BOARDS:</Text>
      <BoardList
        {...data}
      />
      <BoardModal
        isOpen={isBoardModalOpen}
        closeModel={() => setIsBoardModalOpen(false)}
        takePhoto={() => {}}
        selectFromCameraRoll={() => {}}
      />
    </View>
  );
}

export default Boards;
