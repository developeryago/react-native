import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HorizontalLine, {Horizontalline} from "./components/Horizontalline"
// import Item from './components/Item';

function Item(props) {
  return(
      <View style={{
          backgroundColor: props.bgColor,
          borderRadius: 16,
          marginTop: 16,
          marginRight: 16,
          padding: 16, 
          width: "100%",
      }}>
      <Text style={{ fontWeght: "700"}}>
         {props.text}
      </Text>
      </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Minha jornada no React Native</Text>
      <StatusBar style="auto" />
      <HorizontalLine></HorizontalLine>

      <View style={styles.grid}>
        <Item text="Fundamentos do React Native" bgColor="#00ff91"/>
        <Item text="Expor & Expor CLI" bgColor="#00ff91"/>
        <Item text="Estilização com StyleSheet" bgColor="#00ff91"/>
        <Item text="Navegação" bgColor="#910"/>
        <Item text="ScrollView & FlatList" bgColor="#910"/>
        <Item text="Periféricos" bgColor="#910"/>
        <Item text="Styled Components" bgColor="#910"/>
        <Item text="Temos e Estilos Globais" bgColor="#910"/>
        <Item text="Consumo de API" bgColor="#910"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'right',
    // justifyContent: 'center',
    // padding: 25,
    paddingHorizontal: 16,
    paddingTop: 80,
  },
    textTitle: {
      fontSize: 25,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  card: {
    // fontSize: 20,
    // borderColor: "none",
    // maxHeight:50,
    // borderRadius: 25,
    // textAlign: "center",
    // backgroundColor: "#00ff91",
    // padding: 10,
    // margin: 7,
  },
  red: {
    // backgroundColor:"#910",
    // padding: 10,
    // margin: 7,
    // fontSize: 20,
    // borderColor: "none",
    // maxHeight:50,
    // borderRadius: 25,
    // textAlign: "center",
  }
});
