import { View, Text, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet } from "react-native"
import NavButton from "../components/NavButton"

export default function NavigationScreen() {
    const navigation = useNavigation()
    const navigateBack = () => {
        navigation.goBack()
    }

    const navigationPag03 = useNavigation()
    const toPage03  = () => {
        navigationPag03.navigate("Page03")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aula de Navegação</Text>
            <NavButton text="Voltar" onPress={navigateBack}/>
            <NavButton text="Pag 03" onPress={toPage03}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
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