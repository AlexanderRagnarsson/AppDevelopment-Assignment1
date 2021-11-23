import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Boards from './src/views/Boards';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Boards />
    </View>
  );
}

export default App;
