import { Center, Image, Transition } from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import PerspectiveBox from "~/components/PerspectiveBox"
import weatherCodeToIcon from "~/constants/weatherCodeToIcon"
import { useWeatherSettings } from "~/contexts/WeatherSettingsContext"
import useWeather from "~/hooks/useWeather"

const TRANSITION_DURATION = 300

const WeatherIcon = () => {
  const { city } = useWeatherSettings()
  const { weather } = useWeather(city.value)
  const [debouncedWeather] = useDebouncedValue(weather, TRANSITION_DURATION)
  const debouncedIcon = weatherCodeToIcon[debouncedWeather?.weather[0]?.icon]

  return (
    <Center>
      <PerspectiveBox>
        <Transition
          transition="pop"
          duration={TRANSITION_DURATION}
          timingFunction="ease"
          mounted={weather === debouncedWeather}
        >
          {(styles) => (
            <Image
              src={debouncedIcon && `weather/${debouncedIcon}.png`}
              alt={debouncedIcon}
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
  )
}

export default WeatherIcon
