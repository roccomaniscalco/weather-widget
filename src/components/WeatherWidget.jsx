import { Group, Stack } from "@mantine/core"
import CityInput from "~/components/CityInput"
import TempUnitSwitch from "~/components/TempUnitSwitch"
import WeatherDetails from "~/components/WeatherDetails"
import WeatherIcon from "~/components/WeatherIcon"
import WeatherSummary from "~/components/WeatherSummary"
import WidgetPaper from "~/components/WidgetPaper"

const WeatherWidget = () => {
  return (
    <WidgetPaper sx={{ width: "400px", height: "500px" }}>
      <Stack justify="space-between" sx={{ height: "100%" }}>
        <Group spacing="xs">
          <CityInput />
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
    </WidgetPaper>
  )
}

export default WeatherWidget
