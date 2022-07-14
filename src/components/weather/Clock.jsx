import { Skeleton, Text } from "@mantine/core"
import { useInterval } from "@mantine/hooks"
import { useEffect, useState } from "react"
import { useWeatherSettings } from "~/contexts/WeatherSettingsContext"
import useWeather from "~/hooks/useWeather"

const applyTimezoneOffset = (date, offsetSec) => {
  const timezoneDifference = offsetSec / 60 + date.getTimezoneOffset()
  return new Date(date.getTime() + timezoneDifference * 60 * 1000)
}

const Clock = () => {
  const { city } = useWeatherSettings()
  const { weather } = useWeather(city.value)
  const [date, setDate] = useState(new Date())

  const clock = useInterval(() => {
    setDate(new Date())
  }, 1000)

  useEffect(() => {
    clock.start()
    return clock.stop()
  }, [])

  if (!weather) return <Skeleton width={86} height="100%" radius="xl" />

  return (
    <Text size="xs">
      {applyTimezoneOffset(date, weather.timezone).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </Text>
  )
}

export default Clock
