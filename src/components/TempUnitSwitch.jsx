import { Center, SegmentedControl, useMantineTheme } from "@mantine/core"
import React from "react"
import { TemperatureCelsius, TemperatureFahrenheit } from "tabler-icons-react"
import { useWeather } from "~/contexts/WeatherContext"

const TempUnitSwitch = () => {
  const theme = useMantineTheme()
  const { tempUnit, setTempUnit } = useWeather()

  const data = [
    {
      value: "f",
      label: (
        <Center>
          <TemperatureFahrenheit size={18} />
        </Center>
      ),
    },
    {
      value: "c",
      label: (
        <Center>
          <TemperatureCelsius size={18} />
        </Center>
      ),
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
