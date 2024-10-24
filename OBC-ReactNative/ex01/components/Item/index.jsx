export default function Item(props) {
    return(
        <View style={{
            backgroudColor: props.bgColor,
            borderRadios: 16,
            marginTop: 16,
            marginRight: 16,
            padding: 16, 
            width: "100%",
        }}>
        <Text style={{ fontWeght: "700"}}>
           {props.Text}
        </Text>
        </View>
    )
}