import { Skeleton, Text } from "@mantine/core"
import { useInterval } from "@mantine/hooks"
import { useEffect, useState } from "react"
import { useCity } from "~/contexts/CityContext"
import useWeather from "~/hooks/useWeather"

const applyTimezoneOffset = (date, offsetSec) => {
  const timezoneDifference = offsetSec / 60 + date.getTimezoneOffset()
  return new Date(date.getTime() + timezoneDifference * 60 * 1000)
}

const Clock = () => {
  const { city } = useCity()
  const { weather } = useWeather(city.id)
  const [date, setDate] = useState(new Date())

  const clock = useInterval(() => {
    setDate(new Date())
  }, 1000)

  useEffect(() => {
    clock.start()
    return clock.stop()
  }, [])

  if (!weather) return <Skeleton width={82} height="100%" />

  return (
    <Text size="lg" align="right" style={{ width: 82 }}>
      {applyTimezoneOffset(date, weather.timezone).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </Text>
  )
}

export default Clock
