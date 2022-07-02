import { Center, Image, Loader, Skeleton, Transition } from "@mantine/core"
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
          {(styles) =>
            debouncedIcon && (
              <Image
                src={`weather/${debouncedIcon}.png`}
                alt={debouncedIcon}
                width={250}
                style={styles}
                withPlaceholder
                placeholder={<Loader size="xl" variant="bars"/>}
              />
            )
          }
        </Transition>
      </PerspectiveBox>
    </Center>
  )
}

export default WeatherIcon
