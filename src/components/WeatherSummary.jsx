import { Skeleton, Stack, Text } from "@mantine/core"
import Clock from "~/components/Clock"
import TempText from "~/components/TempText"
import { useWeather } from "~/contexts/WeatherContext"

const WeatherSummary = () => {
  const { weather } = useWeather()

  if (!weather) return <Skeleton sx={{ flex: 2 }} height={100} />

  return (
    <Stack
      spacing={0}
      align="end"
      justify="space-between"
      sx={{ height: "100%" }}
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
