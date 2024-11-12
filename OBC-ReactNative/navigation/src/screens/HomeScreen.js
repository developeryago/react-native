import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import StyledTitle from "../components/StyledTitle";
import StyledButton from "../components/StyledButton";

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
    const toUsingApiScreen = () => {
        navigation.navigate("UsingApiScreen")
    }

    return (
        <Container>
            <StyledTitle color="#1a1c">Hello World</StyledTitle>
            <StatusBar style="auto"></StatusBar>
            <StyledButton onPress={navigationNativeScreen}>Navegação</StyledButton>
            <StyledButton onPress={toScrollViewScreen}>ScrollView</StyledButton>
            <StyledButton onPress={toNavigationFlatListScreen}>FlatListScreen</StyledButton>
            <StyledButton onPress={toStyledComponentsScreen}>StyledComponents</StyledButton>
            <StyledButton onPress={toUsingApiScreen}>Consumindo API</StyledButton>
        </Container>
    )
}