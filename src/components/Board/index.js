import React from "react";
import { View, FlatList, Text } from "react-native";
import styles from './styles';

const Board = ({ data }) => (
    <View style={styles.listContainer}>
        <FlatList
            numColumns={1}
            data={data}
            renderItem={({ item }) => (
                <Text>
                    {`${item.id} ${item.name}`}
                </Text>
            )}
            keyExtractor={data => data.id} />
    </View>
);

export default Board;