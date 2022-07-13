import { Center, Image, Skeleton, Transition } from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import PerspectiveBox from "~/components/PerspectiveBox"
import weatherCodeToIcon from "~/constants/weatherCodeToIcon"
import { useWeather } from "~/contexts/WeatherContext"

const TRANSITION_DURATION = 300

const WeatherIcon = () => {
  const { weather, isLagging } = useWeather()
  const [debouncedWeather] = useDebouncedValue(weather, TRANSITION_DURATION)
  const debouncedIcon = weatherCodeToIcon[debouncedWeather?.weather[0]?.icon]

  if (!weather) return <Skeleton sx={{ flex: 1 }} />

  return (
    <Center>
      <PerspectiveBox>
        <Transition
          transition="pop"
          duration={TRANSITION_DURATION}
          timingFunction="ease"
          mounted={weather === debouncedWeather && !isLagging}
        >
          {(styles) => (
            <Image
              src={debouncedIcon && `weather/${debouncedIcon}.png`}
              alt={debouncedIcon}
              width={250}
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
  )
}

export default WeatherIcon
