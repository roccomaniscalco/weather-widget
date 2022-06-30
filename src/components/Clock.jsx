import { Skeleton, Text } from "@mantine/core"
import { useInterval } from "@mantine/hooks"
import { useEffect, useState } from "react"
import { useWeather } from "~/contexts/WeatherContext"

const applyTimezoneOffset = (date, offsetSec) => {
  const timezoneDifference = offsetSec / 60 + date.getTimezoneOffset()
  return new Date(date.getTime() + timezoneDifference * 60 * 1000)
}

const Clock = () => {
  const { weather } = useWeather()
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
    <Text size="xs" color="dimmed">
      {applyTimezoneOffset(date, weather.timezone).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </Text>
  )
}

export default Clock
