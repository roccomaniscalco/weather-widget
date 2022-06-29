import { Group, Stack } from "@mantine/core"
import CityInput from "~/components/CityInput"
import Clock from "~/components/Clock"
import WeatherDetails from "~/components/WeatherDetails"
import WeatherIcon from "~/components/WeatherIcon"
import WeatherSummary from "~/components/WeatherSummary"
import WidgetPaper from "~/components/WidgetPaper"

const WeatherWidget = () => {
  return (
    <WidgetPaper>
      <Stack
        justify="space-between"
        style={{ height: "480px", width: "380px" }}
      >
        <Group position="apart" spacing="lg">
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
