import { SegmentedControl } from "@mantine/core"
import React from "react"

const TempUnitSwitch = () => {
  const data = [
    {
      value: "c",
      label: "ºC",
    },
    {
      value: "f",
      label: "ºF",
    },
  ]

  return (
    <SegmentedControl
      size="xs"
      radius="xl"
      orientation="vertical"
      data={data}
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
      }}
    />
  )
}

export default TempUnitSwitch
