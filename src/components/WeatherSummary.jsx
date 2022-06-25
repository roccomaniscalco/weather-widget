import { Stack, Text } from "@mantine/core"
import { city } from "~/constants/propTypes"
import useWeather from "~/hooks/useWeather"
import { kelvinToFahrenheit } from "~/utils/convertKelvin"

const WeatherSummary = ({ city }) => {
  const { weather } = useWeather(city.id)

  return (
    <Stack spacing={6}>
      <Text align="right" style={{ fontSize: 64, lineHeight: 1 }}>
        {kelvinToFahrenheit(weather.main.temp)}º
      </Text>
      <Text size="xl" color="dimmed" align="right">
        {weather.weather[0].description}
      </Text>
    </Stack>
  )
}

WeatherSummary.propTypes = {
  city: city.isRequired,
}

export default WeatherSummary
