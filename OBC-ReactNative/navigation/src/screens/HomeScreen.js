import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavButton from "../components/NavButton";
import Container from "../components/Container";
import Title from "../components/Title";

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
    const toStyledComponentsScreen = () => {
        navigation.navigate("StyledComponentsScreen")
    }

    return (
        <Container>
            <Title text="Hello World!!"/>
            <StatusBar style="auto"></StatusBar>
            <NavButton text="Aula de Navegação" onPress={navigationNativeScreen}/>
            <NavButton text="Aula de ScrollView" onPress={toScrollViewScreen}/>
            <NavButton text="Aula de FlatListScree" onPress={toNavigationFlatListScreen}/>
            <NavButton text="Aula de StyledComponents" onPress={toStyledComponentsScreen}/>
        </Container>
    )
}