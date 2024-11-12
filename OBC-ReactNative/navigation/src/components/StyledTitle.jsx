import styled from "styled-components/native";

export default styled.Text`
    color: ${(props) => props.theme.colors.dark};
    font-family: ${(props) => props.theme.fonts.roboto};
    font-size: 40px;
`