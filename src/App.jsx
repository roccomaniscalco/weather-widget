import { Center } from "@mantine/core"
import ThemeProvider from "./contexts/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <Center style={{ height: "100vh" }}>
        <h1>hello world!</h1>
      </Center>
    </ThemeProvider>
  )
}

export default App
