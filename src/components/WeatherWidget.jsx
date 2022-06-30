import { Group, Stack } from "@mantine/core"
import CityInput from "~/components/CityInput"
import Clock from "~/components/Clock"
import WeatherDetails from "~/components/WeatherDetails"
import WeatherIcon from "~/components/WeatherIcon"
import WeatherSummary from "~/components/WeatherSummary"
import WidgetPaper from "~/components/WidgetPaper"

const WeatherWidget = () => {
  return (
    <WidgetPaper
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: "420px",
        maxHeight: "520px",
      }}
    >
      <Stack justify="space-between" sx={{ height: "100%" }}>
        <Group position="apart">
          <CityInput />
          <Clock />
        </Group>
        <WeatherIcon />
        <Group position="apart" align="end" noWrap>
          <WeatherDetails />
          <WeatherSummary />
        </Group>
      </Stack>
    </WidgetPaper>
  )
}

export default WeatherWidget
