import { SimpleGrid, Skeleton, useMantineTheme } from "@mantine/core"
import { ArrowDownLeft, ArrowUpRight, Droplet, Wind } from "tabler-icons-react"
import TempText from "~/components/TempText"
import WeatherDetailsItem from "~/components/WeatherDetailsItem"
import { useWeather } from "~/contexts/WeatherContext"

const WeatherDetails = () => {
  const { weather } = useWeather()
  const theme = useMantineTheme()

  if (!weather) return <Skeleton sx={{ flex: 3 }} height={100} />

  return (
    <SimpleGrid spacing="xs" cols={2}>
      <WeatherDetailsItem
        icon={<ArrowUpRight color={theme.colors.green[5]} />}
        title="High"
      >
        <TempText>{weather.main.temp_max}</TempText>
      </WeatherDetailsItem>
      <WeatherDetailsItem
        icon={<ArrowDownLeft color={theme.colors.red[5]} />}
        title="Low"
      >
        <TempText>{weather.main.temp_min}</TempText>
      </WeatherDetailsItem>
      <WeatherDetailsItem
        icon={<Wind color={theme.colors.gray[5]} />}
        title="Wind"
      >
        {Math.round(weather.wind.speed) + "m/s"}
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
