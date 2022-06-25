import { Center, Group, Stack } from "@mantine/core"
import { useState } from "react"
import CityInput from "~/components/CityInput"
import Clock from "~/components/Clock"
import WeatherDetails from "~/components/WeatherDetails"
import WeatherIcon from "~/components/WeatherIcon"
import WeatherSummary from "~/components/WeatherSummary"
import WidgetPaper from "~/components/WidgetPaper"
import useWeather from "~/hooks/useWeather"

const WeatherWidget = () => {
  const [city, setCity] = useState({
    id: 4180439,
    name: "Atlanta",
    state: "GA",
    country: "US",
    coord: {
      lon: -84.387978,
      lat: 33.749001,
    },
  })
  const { weather } = useWeather(city.id)

  return (
    <WidgetPaper>
      <Stack
        justify="space-between"
        style={{ height: "480px", width: "400px" }}
      >
        <Group position="apart">
          <CityInput city={city} setCity={setCity} />
          <Stack>
            <Clock />
          </Stack>
        </Group>
        <Center pt="xs">
          <WeatherIcon city={city} />
        </Center>
        {weather && (
          <Group position="apart" align="end">
            <WeatherDetails city={city} />
            <WeatherSummary city={city} />
          </Group>
        )}
      </Stack>
    </WidgetPaper>
  )
}

export default WeatherWidget
