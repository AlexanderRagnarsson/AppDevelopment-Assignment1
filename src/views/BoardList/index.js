import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import TheBoardList from '../../components/BoardList';
import data from '../../resources/data.json';

function BoardList({ navigation: { navigate } }) {
  return (
    <View>
      <Text>BOARDS:</Text>
      <TheBoardList
        {...{ ...data, navigate }}
      />
    </View>
  );
}

BoardList.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoardList;
