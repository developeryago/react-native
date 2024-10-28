import {View, Text, StyleSheet} from "react-native";


export default function SettingsScreen() {
    return (
        <View style={StyleSheet.container}>
            <Text style={styles.title}>Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "#f64348",
        fontSize: 24,
    }
})