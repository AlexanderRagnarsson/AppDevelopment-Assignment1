import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import styles from './styles'

const Toolbar = () => (
    <View style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>Add board?</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>Remove selected board?</Text>
        </TouchableHighlight>
    </View>
);

export default Toolbar;