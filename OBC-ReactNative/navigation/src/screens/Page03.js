import { View, Text, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet } from "react-native"

export default function Page03 () {
    const navigation = useNavigation()
    const navigateBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página 3</Text>
            <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={navigateBack}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
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
    }
})