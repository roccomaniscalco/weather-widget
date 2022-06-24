import { SimpleGrid, useMantineTheme } from "@mantine/core"
import { Droplet, Wind } from "tabler-icons-react"
import WeatherDetailsItem from "~/components/WeatherDetailsItem"
import { city } from "~/constants/propTypes"
import useWeather from "~/hooks/useWeather"

const WeatherDetails = ({ city }) => {
  const { weather } = useWeather(city.id)
  const theme = useMantineTheme()

  return (
    <SimpleGrid spacing="sm" cols={1}>
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
