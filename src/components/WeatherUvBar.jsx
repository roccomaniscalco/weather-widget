import { Box } from "@mantine/core"
import React from "react"

const WeatherUvBar = () => {
  return (
    <Box
      sx={(theme) => ({
        borderRadius: theme.radius.xl,
        height: 6,
        background: theme.fn.linearGradient(
          90,
          "lime",
          "goldenRod",
          "crimson",
          "blueViolet",
          "maroon",
          "maroon"
        ),
      })}
    ></Box>
  )
}

export default WeatherUvBar
