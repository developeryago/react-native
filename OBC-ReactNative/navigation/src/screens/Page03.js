import { useNavigation } from "@react-navigation/native"
import NavButton from "../components/NavButton"
import Container from "../components/Container"
import Title from "../components/Title"

export default function Page03 () {
    const navigation = useNavigation()
    const navigateBack = () => {
        navigation.goBack()
    }

    return (
        <Container>
            <Title text="Pag03"/>
            <NavButton text="Voltar" onPress={navigateBack}/>
        </Container>
    )
}