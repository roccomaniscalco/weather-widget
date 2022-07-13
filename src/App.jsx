import { Center } from "@mantine/core"
import WeatherWidget from "~/components/weather/WeatherWidget"
import { WeatherProvider } from "~/contexts/WeatherContext"
import SwrConfigProvider from "~/contexts/SwrConfigProvider"
import ThemeProvider from "~/contexts/ThemeProvider"

const App = () => {
  return (
    <SwrConfigProvider>
      <ThemeProvider>
        <WeatherProvider>
          <Center style={{ height: "100vh" }}>
            <WeatherWidget />
          </Center>
        </WeatherProvider>
      </ThemeProvider>
    </SwrConfigProvider>
  )
}

export default App
