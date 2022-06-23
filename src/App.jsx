import { Center } from "@mantine/core"
import WidgetPaper from "~/components/WidgetPaper"
import ThemeProvider from "~/contexts/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <Center style={{ height: "100vh" }}>
        <WidgetPaper>
          <h1>Hello, world!</h1>
        </WidgetPaper>
      </Center>
    </ThemeProvider>
  )
}

export default App
