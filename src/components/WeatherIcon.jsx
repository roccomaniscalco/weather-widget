import { Center, Skeleton, Transition } from "@mantine/core"
import { useDeferredValue } from "react"
import PerspectiveBox from "~/components/PerspectiveBox"
import weatherCodeToIcon from "~/constants/weatherCodeToIcon"
import { useWeather } from "~/contexts/WeatherContext"

const WeatherIcon = () => {
  const { weather, isLoading } = useWeather()
  const icon = useDeferredValue(weatherCodeToIcon[weather?.weather[0]?.icon])

  if (!icon) return <Skeleton sx={{ flex: 1 }} />

  return (
    <Center>
      <Transition
        transition="scale"
        duration={400}
        timingFunction="ease"
        mounted={!isLoading}
      >
        {(styles) => (
          <PerspectiveBox styles={styles}>
            <img src={`weather/${icon}.png`} width={250} alt={icon} />
          </PerspectiveBox>
        )}
      </Transition>
    </Center>
  )
}

export default WeatherIcon
