import { Skeleton, Stack, Text } from "@mantine/core"
import { useCity } from "~/contexts/CityContext"
import useWeather from "~/hooks/useWeather"
import { kelvinToFahrenheit } from "~/utils/convertKelvin"

const WeatherSummary = () => {
  const { city } = useCity()
  const { weather } = useWeather(city.id)

  if (!weather) return <Skeleton sx={{ flex: 2 }} height={100} />

  return (
    <Stack spacing="xs">
      <Text align="right" style={{ fontSize: 64, lineHeight: 1 }}>
        {kelvinToFahrenheit(weather.main.temp)}º
      </Text>
      <Text size="md" color="dimmed" align="right" lineClamp={1}>
        {weather.weather[0].description}
      </Text>
    </Stack>
  )
}

export default WeatherSummary
