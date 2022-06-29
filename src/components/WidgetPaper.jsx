import { Paper } from "@mantine/core"
import { node } from "prop-types"
import React from "react"

const WidgetPaper = ({ children, ...props }) => {
  return (
    <Paper withBorder p="xl" radius="lg" {...props}>
      {children}
    </Paper>
  )
}

WidgetPaper.propTypes = {
  children: node.isRequired,
}

export default WidgetPaper
