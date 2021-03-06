import { Global, MantineProvider } from "@mantine/core"
import { node } from "prop-types"

const ThemeProvider = ({ children }) => {
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{ colorScheme: "dark" }}
      styles={{
        Paper: (theme) => ({
          root: {
            backgroundColor:
              theme.colorScheme === "light"
                ? theme.white
                : theme.colors.dark[7],
            boxShadow: theme.colorScheme === "light" && theme.shadows.lg,
          },
        }),
      }}
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
