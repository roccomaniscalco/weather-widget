import { Center, createStyles, SegmentedControl } from "@mantine/core"
import { TemperatureCelsius, TemperatureFahrenheit } from "tabler-icons-react"
import { useWeatherSettings } from "~/contexts/WeatherSettingsContext"

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
    border:
      theme.colorScheme === "dark"
        ? `2px solid ${theme.colors.dark[6]}`
        : `2px solid ${theme.colors.gray[1]}`,
    height: "100%",
  },
}))

const TempUnitSwitch = () => {
  const { classes } = useStyles()
  const { tempUnit, setTempUnit } = useWeatherSettings()

  const data = [
    {
      value: "f",
      label: (
        <Center py={3}>
          <TemperatureFahrenheit size={18} />
        </Center>
      ),
    },
    {
      value: "c",
      label: (
        <Center py={3}>
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
      classNames={classes}
    />
  )
}

export default TempUnitSwitch
