import { Alert, Center, Image, Transition } from "@mantine/core"
import { useEffect, useState } from "react"
import { AlertTriangle } from "tabler-icons-react"
import PerspectiveBox from "~/components/PerspectiveBox"

const ErrorFallback = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 100)
  }, [setIsMounted])

  return (
    <>
      <Center>
        <PerspectiveBox>
          <Transition
            transition="pop"
            duration={300}
            timingFunction="ease"
            mounted={isMounted}
          >
            {(styles) => (
              <Image
                src="weather/stars.png"
                width={220}
                style={styles}
                styles={{
                  image: {
                    filter: "drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.4))",
                  },
                }}
              />
            )}
          </Transition>
        </PerspectiveBox>
      </Center>
      <Alert
        icon={<AlertTriangle />}
        title="Oops! Something went wrong."
        radius="lg"
        color="red"
      >
        An error occurred while retrieving current weather data.
      </Alert>
    </>
  )
}

export default ErrorFallback
