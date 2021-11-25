import React from 'react';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

function Toolbar({
  onAdd,
  addString,
}) {
  return (
    <View style={styles.toolbar}>
      <TouchableHighlight
        styles={styles.toolbarAction}
        onPress={onAdd}
      >
        <Text
          styles={styles.toolbarActionText}
        >
          <Entypo
            styles={styles.icon}
            name="squared-plus"
          />
          {addString}
        </Text>
      </TouchableHighlight>
    </View>
  );
}

Toolbar.propTypes = {
  // What happens when stuff is pressed
  onAdd: PropTypes.func.isRequired,
  // The thing that is pressed on to add stuff
  addString: PropTypes.string.isRequired,
};

export default Toolbar;
