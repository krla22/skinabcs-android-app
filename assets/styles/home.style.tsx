import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    banner: {
        height: windowHeight * 0.45,
        width: windowWidth * 1
    },
    aboutBanner: {
        height: windowHeight * 0.2,
        width: windowWidth * 0.4,
        marginLeft: 15,
        marginRight: 10,
        resizeMode: "contain",
        borderWidth: 1,
        borderColor: "red", 
    },
    textWrapper: {
        color: "white",
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: 10,
        flexWrap: "wrap",
        flex: 2
    },
    textViewWrapper: {
        backgroundColor: "rgb(32, 32, 32)",
        flexDirection: "row", 
        alignItems: "center",
    }
});

export default styles;