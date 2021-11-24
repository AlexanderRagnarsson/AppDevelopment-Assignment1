import { StyleSheet } from "react-native";

export default StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        backgroundColor: 'blue'
    },
    toolbarAction: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    toolbarActionText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    }
})