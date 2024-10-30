import { StatusBar, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavButton from "../components/NavButton";

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
            <NavButton text="Aula de Navegação" onPress={navigationNativeScreen}/>
            <NavButton text="Aula de ScrollView" onPress={toScrollViewScreen}/>
            <NavButton text="Aula de FlatListScree" onPress={toNavigationFlatListScreen}/>
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