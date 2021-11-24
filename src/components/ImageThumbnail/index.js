import React from "react";
import { View, Image } from "react-native";
import styles from './styles'

const ImageThumbnail = ({ name, file }) => (
    <View>
        <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: file }} />
    </View>
);

export default ImageThumbnail;