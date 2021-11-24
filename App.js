import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Boards from './src/views/Boards';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#236',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style={{ style: 'auto' }} />
      <Boards />
    </View>
  );
}

export default App;
