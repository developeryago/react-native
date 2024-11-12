import StackNavigator from "./src/StackNavigator";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";


export default function App() {
  const [fontsLoaded] = useFonts({Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
          <StackNavigator/>
    </ThemeProvider>

  )
}
