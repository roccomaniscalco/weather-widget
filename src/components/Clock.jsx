import { Text } from "@mantine/core"
import { useInterval } from "@mantine/hooks"
import { useEffect, useState } from "react"
import { city } from "~/constants/propTypes"
import useWeather from "~/hooks/useWeather"

const applyTimezoneOffset = (date, offsetSec) => {
  const timezoneDifference = offsetSec / 60 + date.getTimezoneOffset()
  return new Date(date.getTime() + timezoneDifference * 60 * 1000)
}

const Clock = ({ city }) => {
  const { weather } = useWeather(city.id)
  const [date, setDate] = useState(new Date())
  const localeTime = applyTimezoneOffset(
    date,
    weather.timezone
  ).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })

  const clock = useInterval(() => {
    setDate(new Date())
  }, 1000)

  useEffect(() => {
    clock.start()
    return clock.stop()
  }, [])

  return <Text size="lg">{localeTime}</Text>
}

Clock.propTypes = {
  city: city.isRequired,
}

export default Clock
