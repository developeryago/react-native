import { StatusBar, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {

    const navigation = useNavigation()
    const navigationNativeScreen = () => {
        navigation.navigate('Navigation')
    }

    const toScrollViewScreen = () => {
        navigation.navigate("ScrollView")
    }
    const toNavigationFlatListScreen = () => {
        navigation.navigate("FlatListScreen")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World!</Text>
            <StatusBar style="auto"></StatusBar>
            <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button} 
            onPress={navigationNativeScreen}>
               
                <Text style={styles.buttonText}>Aula de Navegação</Text>
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={toScrollViewScreen}>
                <Text style={styles.buttonText}>Aula de ScrollView</Text>
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={toNavigationFlatListScreen}>
                <Text style={styles.buttonText}>Aula de FlatListScreen</Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: "#1c1a1d",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff"
    },
})