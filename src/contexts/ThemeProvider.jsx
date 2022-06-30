import { Global, MantineProvider } from "@mantine/core"
import { node } from "prop-types"

const ThemeProvider = ({ children }) => {
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{ colorScheme: "dark" }}
    >
      <Global
        styles={(theme) => ({
          body: {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
          },
        })}
      />
      {children}
    </MantineProvider>
  )
}

ThemeProvider.propTypes = {
  children: node,
}

export default ThemeProvider
