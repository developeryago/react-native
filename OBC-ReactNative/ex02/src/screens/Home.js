import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
      </View>
    )
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: "#ff0044",
      fontSize: 24,
    }
  });