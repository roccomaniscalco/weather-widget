import { Text } from "@mantine/core"
import { city } from "~/constants/propTypes"
import useWeather from "~/hooks/useWeather"
import { kelvinToFahrenheit } from "~/utils/convertKelvin"

const WeatherSummary = ({ city }) => {
  const { weather } = useWeather(city.id)

  return (
    <div>
      <Text align="right" style={{ fontSize: 64, lineHeight: 1.2 }}>
        {kelvinToFahrenheit(weather.main.temp)}º
      </Text>
      <Text size="xl" color="dimmed" align="right">
        {weather.weather[0].description}
      </Text>
    </div>
  )
}

WeatherSummary.propTypes = {
  city: city.isRequired,
}

export default WeatherSummary
