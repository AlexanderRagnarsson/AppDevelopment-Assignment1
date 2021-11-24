import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toolbar from './src/components/Toolbar';
import Boards from './src/views/Boards';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App() {
  return (
    <View style={{ flex: 1 }}>
      <Toolbar />
      <Boards />
    </View >
  );
}

export default App;
