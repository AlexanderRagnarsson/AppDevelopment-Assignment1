import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: `#faebd7`
    },
    logo: {
        width:200,
        height:200
    },
    paragraph: {
        textAlign: 'center',
        color: 'red'
    },
    button: {
        marginTop: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'gray'
    },
    buttonText: {
        color: 'white'
    }
});