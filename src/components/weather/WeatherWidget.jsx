import { Group, Paper, Skeleton, Stack } from "@mantine/core"
import { Suspense } from "react"
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
        <Suspense fallback={<Skeleton sx={{ flex: 1 }} />}>
          <WeatherIcon />
        </Suspense>
        <Group
          position="apart"
          noWrap
          sx={{
            maxHeight: "97px",
            alignItems: "flex-end" /* safari fix */,
          }}
        >
          <Suspense fallback={<Skeleton sx={{ flex: 2 }} height={100} />}>
            <WeatherSummary />
          </Suspense>
          <Suspense fallback={<Skeleton sx={{ flex: 3 }} height={100} />}>
            <WeatherDetails />
          </Suspense>
        </Group>
      </Stack>
    </Paper>
  )
}

export default WeatherWidget
