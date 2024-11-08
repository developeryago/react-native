import styled from "styled-components/native";

const Background = styled.TouchableOpacity`
    background-color: ${(props) => props.color ?? "#1c1a1d"};
    border-radius: 10px;
    margin: 10px 0;
    padding: 10px;
`
const Text = styled.Text`
    color: ${(color) => color ?? "#fff"};
`

export default function({bgColor, color, chielren, onPress}) {
    return (
    <Background color={bgColor} onPress={onPress}>
        <Text color={color}>{chielren}</Text>
    </Background>
    )
}