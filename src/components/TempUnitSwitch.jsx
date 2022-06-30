import { SegmentedControl, useMantineTheme } from "@mantine/core"
import React from "react"
import { useWeather } from "~/contexts/WeatherContext"

const TempUnitSwitch = () => {
  const theme = useMantineTheme()
  const { tempUnit, setTempUnit } = useWeather()

  const data = [
    {
      value: "f",
      label: "ºF",
    },
    {
      value: "c",
      label: "ºC",
    },
  ]

  return (
    <SegmentedControl
      data={data}
      value={tempUnit}
      onChange={setTempUnit}
      size="xs"
      radius="xl"
      color="indigo"
      sx={{
        backgroundColor: theme.colors.dark[6],
        border: `5px solid ${theme.colors.dark[6]}`,
        height: "100%",
      }}
    />
  )
}

export default TempUnitSwitch
