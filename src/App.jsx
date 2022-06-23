import { Center } from "@mantine/core"
import WeatherWidget from "~/components/WeatherWidget"
import ThemeProvider from "~/contexts/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <Center style={{ height: "100vh" }}>
        <WeatherWidget />
      </Center>
    </ThemeProvider>
  )
}

export default App
