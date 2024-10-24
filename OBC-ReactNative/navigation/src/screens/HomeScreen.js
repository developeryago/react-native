import { StatusBar, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {

    const navigation = useNavigation()
    const navigationNativeScreen = () => {
        navigation.navigate('Navigation')
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
        backgroundColorcolor: "#f64348"
    },
    buttonText: {
    
    }
})