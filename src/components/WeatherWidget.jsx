import { Group, Stack } from "@mantine/core"
import { Suspense, useState } from "react"
import CityInput from "~/components/CityInput"
import Clock from "~/components/Clock"
import WeatherDetails from "~/components/WeatherDetails"
import WeatherIcon from "~/components/WeatherIcon"
import WeatherSummary from "~/components/WeatherSummary"
import WidgetPaper from "~/components/WidgetPaper"

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
        <Group position="apart" align="end">
          <Suspense>
            <WeatherDetails city={city} />
          </Suspense>
          <Suspense>
            <WeatherSummary city={city} />
          </Suspense>
        </Group>
      </Stack>
      <Suspense>
        <WeatherIcon city={city} />
      </Suspense>
    </WidgetPaper>
  )
}

export default WeatherWidget
