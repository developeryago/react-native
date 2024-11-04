import { useNavigation } from "@react-navigation/native"
import NavButton from "../components/NavButton"
import Title from "../components/Title"
import Container from "../components/Container"

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
        <Container>
            <Title text="NavigationScreen"/>
            <NavButton text="Voltar" onPress={navigateBack}/>
            <NavButton text="Pag 03" onPress={toPage03}/>
        </Container>
    )
}