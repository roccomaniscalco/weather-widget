import { Skeleton, Stack, Text } from "@mantine/core"
import Clock from "~/components/Clock"
import TempText from "~/components/TempText"
import { useWeather } from "~/contexts/WeatherContext"

const WeatherSummary = () => {
  const { weather } = useWeather()

  if (!weather) return <Skeleton sx={{ flex: 2 }} height={100} />

  return (
    <Stack
      spacing={2}
      justify="space-between"
      sx={{ maxWidth: 130, textAlign: "right" }}
    >
      <Clock />
      <TempText style={{ fontSize: 48, lineHeight: 1 }}>
        {weather.main.temp}
      </TempText>
      <Text size="md">{weather.weather[0].description}</Text>
    </Stack>
  )
}

export default WeatherSummary
