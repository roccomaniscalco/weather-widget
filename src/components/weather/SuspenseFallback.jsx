import { Group, Skeleton } from "@mantine/core"
import React from "react"

const SuspenseFallback = () => {
  return (
    <>
      <Skeleton sx={{ flex: 1 }} />
      <Group sx={{ maxHeight: "97px" }}>
        <Skeleton sx={{ flex: 2 }} height={100} />
        <Skeleton sx={{ flex: 3 }} height={100} />
      </Group>
    </>
  )
}

export default SuspenseFallback
