import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import NavigationScreen from "./screens/NavigationScreen";
import Page03 from "./screens/Page03";

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Navigation" component={NavigationScreen}/>
                <Stack.Screen name="Page03" component={Page03}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}