import StackNavigator from "./src/StackNavigator";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
          <StackNavigator/>
    </ThemeProvider>

  )
}
