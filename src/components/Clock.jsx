import { Text } from "@mantine/core"
import { useInterval } from "@mantine/hooks"
import { useEffect, useState } from "react"

const dateFormatOptions = { hour: "2-digit", minute: "2-digit" }

const Clock = () => {
  const [date, setDate] = useState(new Date())
  const clock = useInterval(() => {
    setDate(new Date())
  }, 1000)

  useEffect(() => {
    clock.start()
    return clock.stop()
  }, [])

  return (
    <Text size="lg">{date.toLocaleTimeString("en-US", dateFormatOptions)}</Text>
  )
}

export default Clock
