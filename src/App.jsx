import { Center } from "@mantine/core"
import WeatherWidget from "~/components/WeatherWidget"
import SwrConfigProvider from "~/contexts/SwrConfigProvider"
import ThemeProvider from "~/contexts/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <SwrConfigProvider>
        <Center style={{ height: "100vh" }}>
          <WeatherWidget />
        </Center>
      </SwrConfigProvider>
    </ThemeProvider>
  )
}

export default App
