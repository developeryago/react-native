import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home';
import SettingsScreen from './src/screens/SettingsScreen';

// function HomeScreen () {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Home</Text>
//     </View>
//   )
// }

// function SettingsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Settings</Text>
//     </View>
//   )
// }

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name='Settings' component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    color: "#f64348",
    fontSize: 24,

  }
})
