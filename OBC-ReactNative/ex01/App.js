import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HorizontalLine, {Horizontalline} from "./components/Horizontalline"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Minha jornada no React Native</Text>
      <StatusBar style="auto" />
      <HorizontalLine></HorizontalLine>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'rigth',
    justifyContent: 'top',
  },
  text: {
    font: "5rem",
    padding: "2rem"
  },
  line: {
    borderBottomWidth:1,
    borderBottomColor: '#000',
    marginVertical: 10,
  }
});
