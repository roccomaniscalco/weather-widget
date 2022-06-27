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
        style={{ height: "480px", width: "400px" }}
      >
        <Group position="apart" >
          <CityInput />
          <Clock />
        </Group>
        <WeatherIcon />
        <Group position="apart" align="end">
          <WeatherDetails />
          <WeatherSummary />
        </Group>
      </Stack>
    </WidgetPaper>
  )
}

export default WeatherWidget
