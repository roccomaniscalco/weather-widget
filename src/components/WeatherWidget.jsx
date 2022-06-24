import { createStyles } from "@mantine/core"
import { Suspense, useState } from "react"
import CityInput from "~/components/CityInput"
import Clock from "~/components/Clock"
import WeatherSummary from "~/components/WeatherSummary"
import WidgetPaper from "~/components/WidgetPaper"

const useStyles = createStyles((theme) => ({
  container: {
    position: "relative",
    width: "500px",
    height: "500px",
    margin: theme.spacing.lg,
  },

  topLeft: { position: "absolute", top: "0", left: "0" },
  topRight: { position: "absolute", top: "0", right: "0" },
  bottomRight: { position: "absolute", bottom: "0", right: "0" },
  bottomLeft: { position: "absolute", bottom: "0", left: "0" },
}))

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
        <div className={classes.topLeft}>
          <CityInput city={city} setCity={setCity} />
        </div>
        <div className={classes.topRight}>
          <Clock />
        </div>
        <div className={classes.bottomRight}>
          <Suspense>
            <WeatherSummary city={city} />
          </Suspense>
        </div>
        <div
          className={classes.bottomLeft}
          style={{ backgroundColor: "red", width: "20px", height: "20px" }}
        />
      </div>
    </WidgetPaper>
  )
}

export default WeatherWidget
