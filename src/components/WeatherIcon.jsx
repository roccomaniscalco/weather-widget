import { Center, Skeleton, Transition } from "@mantine/core"
import { useDeferredValue } from "react"
import PerspectiveBox from "~/components/PerspectiveBox"
import weatherCodeToIcon from "~/constants/weatherCodeToIcon"
import { useCity } from "~/contexts/CityContext"
import useWeather from "~/hooks/useWeather"

const WeatherIcon = () => {
  const { city } = useCity()
  const { weather, isLoading } = useWeather(city.id)
  const icon = useDeferredValue(weatherCodeToIcon[weather?.weather[0]?.icon])

  if (!icon) return <Skeleton sx={{ flex: 1 }} />

  return (
    <Center>
      <Transition
        transition="scale"
        duration={400}
        timingFunction="ease"
        mounted={!isLoading || !icon}
      >
        {(styles) => (
          <PerspectiveBox styles={styles}>
            <img src={icon && `weather/${icon}.png`} height={240} alt={icon} />
          </PerspectiveBox>
        )}
      </Transition>
    </Center>
  )
}

export default WeatherIcon
