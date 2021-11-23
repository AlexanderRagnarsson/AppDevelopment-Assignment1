import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';

function BoardList({ boards, lists, tasks }) {
  return (
    <View>
      <FlatList
        numColumns={1}
        data={boards}
        renderItem={({ item }) => (
          <Text>
            {`${item.id} ${item.name}`}
          </Text>
          // TODO: render Board here
          // <Board {...item} />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
}

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object).isRequired,
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoardList;
