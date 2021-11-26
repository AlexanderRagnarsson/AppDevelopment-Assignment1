import React from 'react';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

function AddButton({
  onAdd,
  addString,
}) {
  return (
    <View>
      <TouchableHighlight
        onPress={onAdd}
      >
        <Text>
          <AntDesign name="plus" size={30} color="black" />
          {addString}
        </Text>
      </TouchableHighlight>
    </View>
  );
}

AddButton.propTypes = {
  // What happens when stuff is pressed
  onAdd: PropTypes.func.isRequired,
  // The thing that is pressed on to add stuff
  addString: PropTypes.string.isRequired,
};

export default AddButton;
