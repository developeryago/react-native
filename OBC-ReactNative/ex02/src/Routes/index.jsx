import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "../screens/Home"
import SettingsScreen from "../screens/SettingsScreen"
import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default function Route() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={({route}) => ({
                tabBarIcon: ({ color, size}) => {
                    let iconName

                    if (route.name === "Home") {
                        iconName = "home"
                    } else if (route.name === "Settings") {
                        iconName = "settings"
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                headerShown: false,
                tabBarActiveTintColor: "#ff0044",
                tabBarInactiveTintColor: "#bbb",
                tabBarShowLabel: false
            })} >
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}