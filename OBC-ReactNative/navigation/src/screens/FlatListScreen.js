import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function FlatListScreen() {
    const navigation = useNavigation()
    const navigationBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>FlatListScreen</Text>
            <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={navigationBack}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        Flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize:40,
        color: "#f64348",
    },
    button: {
        backgroundColor: "#000",
        justifyContent:"center",
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        marginTop: 20
    },
    buttonText: {
        color: "#fff",
        fontSize: 16
    }
})