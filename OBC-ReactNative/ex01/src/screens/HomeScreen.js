import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={style.container}>
            <Text style={styles.tile}>Hello World!</Text>
            <StatusBar style="auto"></StatusBar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 40,
        color: "#f64348",
    },
})