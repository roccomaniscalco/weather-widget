import { SimpleGrid, useMantineTheme } from "@mantine/core"
import { ArrowDownLeft, ArrowUpRight, Droplet, Wind } from "tabler-icons-react"
import WeatherDetailsItem from "~/components/WeatherDetailsItem"
import { city } from "~/constants/propTypes"
import useWeather from "~/hooks/useWeather"
import { kelvinToFahrenheit } from "~/utils/convertKelvin"

const WeatherDetails = ({ city }) => {
  const { weather } = useWeather(city.id)
  const theme = useMantineTheme()

  return (
    <SimpleGrid spacing="xl" cols={1}>
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
        icon={<Droplet color={theme.colors.blue[5]} />}
        title="Humidity"
        figure={weather.main.humidity + "%"}
      />
      <WeatherDetailsItem
        icon={<Wind color={theme.colors.gray[5]} />}
        title="Wind"
        figure={weather.wind.speed + " m/s"}
      />
    </SimpleGrid>
  )
}

WeatherDetails.propTypes = {
  city: city.isRequired,
}

export default WeatherDetails
