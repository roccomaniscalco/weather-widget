import { SimpleGrid, Skeleton, useMantineTheme } from "@mantine/core"
import { ArrowDownLeft, ArrowUpRight, Droplet, Wind } from "tabler-icons-react"
import WeatherDetailsItem from "~/components/WeatherDetailsItem"
import { useCity } from "~/contexts/CityContext"
import useWeather from "~/hooks/useWeather"
import { kelvinToFahrenheit } from "~/utils/convertKelvin"

const WeatherDetails = () => {
  const { city } = useCity()
  const { weather } = useWeather(city.id)
  const theme = useMantineTheme()

  if (!weather) return <Skeleton sx={{ flex: 3 }} height={100} />

  return (
    <SimpleGrid spacing="sm" cols={2}>
      <WeatherDetailsItem
        icon={<ArrowUpRight color={theme.colors.green[5]} />}
        title="High"
        figure={kelvinToFahrenheit(weather.main.temp_max) + "º"}
      />
      <WeatherDetailsItem
        icon={<ArrowDownLeft color={theme.colors.red[5]} />}
        title="Low"
        figure={kelvinToFahrenheit(weather.main.temp_min) + "º"}
      />
      <WeatherDetailsItem
        icon={<Wind color={theme.colors.gray[5]} />}
        title="Wind"
        figure={Math.round(weather.wind.speed) + " m/s"}
      />
      <WeatherDetailsItem
        icon={<Droplet color={theme.colors.blue[5]} />}
        title="Humidity"
        figure={weather.main.humidity + "%"}
      />
    </SimpleGrid>
  )
}

export default WeatherDetails
