import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import logo from '../../resources/RU.jpg';
import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.paragraph}>Ogeðslega gaman haahahhahahha xd</Text>
    <TouchableHighlight style={styles.button}>
      <Text style={styles.buttonText}>Boards</Text>
    </TouchableHighlight>
  </View>
);

export default Main;
