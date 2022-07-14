import { Group, Paper, Stack } from "@mantine/core"
import CityAutocomplete from "~/components/weather/CityAutocomplete"
import TempUnitSwitch from "~/components/weather/TempUnitSwitch"
import WeatherDetails from "~/components/weather/WeatherDetails"
import WeatherIcon from "~/components/weather/WeatherIcon"
import WeatherSummary from "~/components/weather/WeatherSummary"

const WeatherWidget = () => {
  return (
    <Paper radius="xl" withBorder sx={{ width: "380px", height: "480px" }}>
      <Stack justify="space-between" p="xl" sx={{ height: "100%" }}>
        <Group>
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
          <WeatherSummary />
          <WeatherDetails />
        </Group>
      </Stack>
    </Paper>
  )
}

export default WeatherWidget
