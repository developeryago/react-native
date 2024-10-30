import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import NavButton from "../components/NavButton";

export default function FlatListScreen() {
    const navigation = useNavigation()
    const navigationBack = () => {
        navigation.goBack()
    }

    const renderMovie = ({item}) => (
        <View style={styles.list}>
            <Text>ID: {item.id}</Text>
            <Text>Filme: {item.title}</Text>
            <Text>Ano: {item.year}</Text>
        </View>
    )
    const movies = [
        { id: 1, year: "1994", title: "Um Sonho de Liberdade" },
        { id: 2, year: "1972", title: "O Poderoso Chefão" },
        { id: 3, year: "2008", title: "Batman: O Cavaleiro das Trevas" },
        { id: 4, year: "1974", title: "O Poderoso Chefão II" },
        { id: 5, year: "1957", title: "12 Homens e uma Sentença" },
        { id: 6, year: "1993", title: "A Lista de Schindler" },
        { id: 7, year: "2003", title: "O Senhor dos Anéis: O Retorno do Rei" },
        { id: 8, year: "1994", title: "Pulp Fiction" },
        { id: 9, year: "2001", title: "O Senhor dos Anéis: A Sociedade do Anel" },
        { id: 10, year: "1966", title: "Três Homens em Conflito" },
      ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>FlatListScreen</Text>
            
            <FlatList 
                data={movies}
                renderItem={renderMovie}
                keyExtractor={(item) => item.id}
            />
            <NavButton text="Voltar" onPress={navigationBack}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        marginHorizontal: 3,
        marginVertical: 32,
    },
    title: {
        fontSize: 40,
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
    },
    list: {
        marginTop: 40,
        marginHorizontal: 10
    }
})