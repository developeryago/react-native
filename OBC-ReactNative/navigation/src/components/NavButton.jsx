import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function NavButton({onPress, text}) {
     return (
        <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
     )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#1c1a1d",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        justifyContent:"center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        color:"#fff"
    }
})