import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import StyledButton from "../components/StyledButton";
import StyledTitle from "../components/StyledTitle";

export default function UsingApiScreen() {
    const navigation = useNavigation()
    const navigateBack = () => {
        navigation.goBack()
    }

    return (
        <Container>
            <StyledTitle>Consumindo API</StyledTitle>
            <StyledButton onPress={navigateBack}>Voltar</StyledButton>
        </Container>
    )
}