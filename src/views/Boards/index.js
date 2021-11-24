import React from 'react';
import { View, Text } from 'react-native';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';

function Boards() {
  return (
    <View>
      <Text>BOARDS:</Text>
      <BoardList
        {...data}
      />
    </View>
  );
}

export default Boards;
