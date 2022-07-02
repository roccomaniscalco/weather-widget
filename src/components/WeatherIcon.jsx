import {
  Center,
  Image,
  Loader,
  Skeleton,
  Transition,
  useMantineTheme,
} from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import PerspectiveBox from "~/components/PerspectiveBox"
import weatherCodeToIcon from "~/constants/weatherCodeToIcon"
import { useWeather } from "~/contexts/WeatherContext"

const TRANSITION_DURATION = 300

const WeatherIcon = () => {
  const theme = useMantineTheme()
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
              withPlaceholder
              placeholder={<Loader size="xl" variant="bars" />}
              style={styles}
              styles={{
                root: {
                  filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.4))",
                },
                placeholder: {
                  background:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[7]
                      : theme.white,
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
