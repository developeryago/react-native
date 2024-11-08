import StackNavigator from "./src/StackNavigator";
import Theme from "./src/theme";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
          <StackNavigator/>
    </ThemeProvider>

  )
}
