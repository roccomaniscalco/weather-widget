import { createStyles } from "@mantine/core"
import React from "react"
import WidgetPaper from "~/components/WidgetPaper"

const useStyles = createStyles(() => ({
  grid: {
    width: "500px",
    height: "500px",
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto auto",
    placeContent: "space-between",
  },
}))

const WeatherWidget = () => {
  const { classes } = useStyles()

  return (
    <WidgetPaper>
      <div className={classes.grid}>
        <div style={{ backgroundColor: "red", width: "20px", height: "20px" }} />
        <div style={{ backgroundColor: "red", width: "20px", height: "20px" }} />
        <div style={{ backgroundColor: "red", width: "20px", height: "20px" }} />
        <div style={{ backgroundColor: "red", width: "20px", height: "20px" }} />
      </div>
    </WidgetPaper>
  )
}

export default WeatherWidget
