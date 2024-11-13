import axios from "axios";
import { useEffect, useState} from "react";
import { Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import StyledButton from "../components/StyledButton";
import StyledTitle from "../components/StyledTitle";
import StyledText from "../components/StyledText";

export default function UsingApiScreen() {
    const [user, setUser] = useState({})
    const navigation = useNavigation()
    const navigateBack = () => {
        navigation.goBack()
    }

    const fetchGithubUser = async () => {
        const res = await axios.get("https://api.github.com/users/developeryago")
        setUser(res.data)
    }
    useEffect(() => {
        fetchGithubUser()
    }, [])

    return (
        <Container>
            <StyledTitle>Consumindo API</StyledTitle>
            <Text style={styles.text}>{user.name}</Text>
            <Text style={styles.text}>{user.bio}</Text>
            <Image source={{uri: user.avatar_url}} style={styles.avatar}/>
            <StyledButton onPress={navigateBack}>Voltar</StyledButton>
        </Container>
    )
}

const styles = StyleSheet.create({
    avatar: {
      alignSelf: 'center',
      borderRadius: 999,
      height: 200,
      width: 200,
      marginVertical: 20
    },
    text: {
      fontSize: 20,
      marginTop: 20,
      textAlign: 'center'
    }
  })