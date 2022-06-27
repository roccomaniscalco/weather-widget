import { Center } from "@mantine/core"
import WeatherWidget from "~/components/WeatherWidget"
import { CityProvider } from "~/contexts/CityContext"
import SwrConfigProvider from "~/contexts/SwrConfigProvider"
import ThemeProvider from "~/contexts/ThemeProvider"

const App = () => {
  return (
    <SwrConfigProvider>
      <ThemeProvider>
        <CityProvider>
          <Center style={{ height: "100vh" }}>
            <WeatherWidget />
          </Center>
        </CityProvider>
      </ThemeProvider>
    </SwrConfigProvider>
  )
}

export default App
