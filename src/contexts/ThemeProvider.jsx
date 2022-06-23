import { MantineProvider } from "@mantine/core"
import { node } from "prop-types"
import React from "react"

const ThemeProvider = ({ children }) => {
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{ colorScheme: "dark" }}
    >
      {children}
    </MantineProvider>
  )
}

ThemeProvider.propTypes = {
  children: node.isRequired,
}

export default ThemeProvider
