import { createStyles, Group, Stack } from "@mantine/core"
import { Suspense, useState } from "react"
import CityInput from "~/components/CityInput"
import Clock from "~/components/Clock"
import WeatherDetails from "~/components/WeatherDetails"
import WeatherSummary from "~/components/WeatherSummary"
import WidgetPaper from "~/components/WidgetPaper"

const useStyles = createStyles({
  container: {
    position: "relative",
    width: 400,
    height: 480,
  },

  topLeft: { position: "absolute", top: "0", left: "0" },
  topRight: { position: "absolute", top: "0", right: "0" },
  bottomRight: { position: "absolute", bottom: "0", right: "0" },
  bottomLeft: { position: "absolute", bottom: "0", left: "0" },
})

const WeatherWidget = () => {
  const { classes } = useStyles()
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
      <div className={classes.container}>
        <Stack justify="space-between" style={{ height: "100%" }}>
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
      </div>
    </WidgetPaper>
  )
}

export default WeatherWidget
