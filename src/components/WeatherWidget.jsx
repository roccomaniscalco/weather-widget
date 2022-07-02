import { Group, Paper, Stack } from "@mantine/core"
import CityAutocomplete from "~/components/CityAutocomplete"
import TempUnitSwitch from "~/components/TempUnitSwitch"
import WeatherDetails from "~/components/WeatherDetails"
import WeatherIcon from "~/components/WeatherIcon"
import WeatherSummary from "~/components/WeatherSummary"

const WeatherWidget = () => {
  return (
    <Paper radius="xl" sx={{ width: "400px", height: "500px" }}>
      <Stack justify="space-between" p="xl" sx={{ height: "100%" }}>
        <Group spacing="xs">
          <CityAutocomplete />
          <TempUnitSwitch />
        </Group>
        <WeatherIcon />
        <Group
          position="apart"
          noWrap
          sx={{
            maxHeight: "97px",
            alignItems: "flex-end" /* safari fix */,
          }}
        >
          <WeatherDetails />
          <WeatherSummary />
        </Group>
      </Stack>
    </Paper>
  )
}

export default WeatherWidget
