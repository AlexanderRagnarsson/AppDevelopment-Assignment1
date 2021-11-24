import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

function Toolbar({
  onAdd,
  addChildren,
}) {
  return (
    <View style={styles.toolbar}>
      <Text>This is toolbar</Text>
      <TouchableHighlight
        onPress={onAdd}
      >
        {addChildren}
      </TouchableHighlight>
    </View>
  );
}

Toolbar.propTypes = {
  // What happens when stuff is pressed
  onAdd: PropTypes.func.isRequired,
  // The thing that is pressed on to add stuff
  addChildren: PropTypes.node.isRequired,
};

export default Toolbar;
