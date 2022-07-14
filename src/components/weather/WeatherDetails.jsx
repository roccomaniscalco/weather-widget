import { SimpleGrid, useMantineTheme } from "@mantine/core"
import { ArrowDownLeft, ArrowUpRight, Droplet, Wind } from "tabler-icons-react"
import TempText from "~/components/weather/TempText"
import WeatherDetailsItem from "~/components/weather/WeatherDetailsItem"
import { useWeatherSettings } from "~/contexts/WeatherSettingsContext"
import useWeather from "~/hooks/useWeather"

const WeatherDetails = () => {
  const theme = useMantineTheme()
  const { city } = useWeatherSettings()
  const { weather } = useWeather(city.value)

  return (
    <SimpleGrid spacing={0} cols={2}>
      <WeatherDetailsItem
        icon={<ArrowUpRight color={theme.colors.green[5]} />}
        title="High"
      >
        <TempText>{weather.main.temp_max}</TempText>
      </WeatherDetailsItem>
      <WeatherDetailsItem
        icon={<Wind color={theme.colors.gray[5]} />}
        title="Wind"
      >
        {Math.round(weather.wind.speed) + "m/s"}
      </WeatherDetailsItem>
      <WeatherDetailsItem
        icon={<ArrowDownLeft color={theme.colors.red[5]} />}
        title="Low"
      >
        <TempText>{weather.main.temp_min}</TempText>
      </WeatherDetailsItem>
      <WeatherDetailsItem
        icon={<Droplet color={theme.colors.blue[5]} />}
        title="Humidity"
      >
        {weather.main.humidity + "%"}
      </WeatherDetailsItem>
    </SimpleGrid>
  )
}

export default WeatherDetails
