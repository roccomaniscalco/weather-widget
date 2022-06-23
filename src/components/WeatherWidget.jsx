import { createStyles } from "@mantine/core"
import React from "react"
import CityInput from "~/components/CityInput"
import Clock from "~/components/Clock"
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

  return (
    <WidgetPaper>
      <div className={classes.container}>
        <div className={classes.topLeft}>
          <CityInput />
        </div>
        <div className={classes.topRight}>
          <Clock />
        </div>
        <div
          className={classes.bottomRight}
          style={{ backgroundColor: "red", width: "20px", height: "20px" }}
        />
        <div
          className={classes.bottomLeft}
          style={{ backgroundColor: "red", width: "20px", height: "20px" }}
        />
      </div>
    </WidgetPaper>
  )
}

export default WeatherWidget
