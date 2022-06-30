import { Center, Group, Stack } from "@mantine/core"
import CityInput from "~/components/CityInput"
import Clock from "~/components/Clock"
import WeatherDetails from "~/components/WeatherDetails"
import WeatherIcon from "~/components/WeatherIcon"
import WeatherSummary from "~/components/WeatherSummary"
import WidgetPaper from "~/components/WidgetPaper"

const WeatherWidget = () => {
  return (
    <WidgetPaper sx={{ width: "400px", height: "500px" }}>
      <Stack sx={{ height: "100%" }}>
        <Group>
          <CityInput />
          <Clock />
        </Group>
        <Center style={{ flex: 1 }}>
          <WeatherIcon />
        </Center>
        <Group position="apart" align="end" noWrap>
          <WeatherDetails />
          <WeatherSummary />
        </Group>
      </Stack>
    </WidgetPaper>
  )
}

export default WeatherWidget
