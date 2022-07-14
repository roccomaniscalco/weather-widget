import { Center } from "@mantine/core"
import WeatherWidget from "~/components/weather/WeatherWidget"
import SwrConfigProvider from "~/contexts/SwrConfigProvider"
import ThemeProvider from "~/contexts/ThemeProvider"
import { WeatherSettingsProvider } from "~/contexts/WeatherSettingsContext"

const App = () => {
  return (
    <SwrConfigProvider>
      <ThemeProvider>
        <WeatherSettingsProvider>
          <Center style={{ height: "100vh" }}>
            <WeatherWidget />
          </Center>
        </WeatherSettingsProvider>
      </ThemeProvider>
    </SwrConfigProvider>
  )
}

export default App
