import { Center, Skeleton, Transition } from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import { useEffect, useState } from "react"
import PerspectiveBox from "~/components/PerspectiveBox"
import weatherCodeToIcon from "~/constants/weatherCodeToIcon"
import { useWeather } from "~/contexts/WeatherContext"

const TRANSITION_DURATION = 300

const WeatherIcon = () => {
  const { weather, isLagging } = useWeather()
  const [debouncedWeather] = useDebouncedValue(weather, TRANSITION_DURATION)
  const [isImgLoading, setIsImgLoading] = useState(true)

  const icon = weatherCodeToIcon[weather?.weather[0]?.icon]
  const debouncedIcon = weatherCodeToIcon[debouncedWeather?.weather[0]?.icon]

  useEffect(() => {
    // if icon has changed, the new icon will have to be loaded
    if (debouncedIcon !== icon) setIsImgLoading(true)
  }, [icon])

  const handleLoad = () => {
    setIsImgLoading(false)
  }

  if (!weather) return <Skeleton sx={{ flex: 1 }} />

  return (
    <>
      <Center>
        <PerspectiveBox>
          <Transition
            transition="pop"
            duration={TRANSITION_DURATION}
            timingFunction="ease"
            mounted={
              debouncedIcon &&
              weather === debouncedWeather &&
              !isImgLoading &&
              !isLagging
            }
          >
            {(styles) =>
              debouncedIcon && (
                <img
                  src={`weather/${debouncedIcon}.png`}
                  width={250}
                  alt={debouncedIcon}
                  style={styles}
                />
              )
            }
          </Transition>
        </PerspectiveBox>
      </Center>

      {/* used to determine when image has loaded */}
      {icon && (
        <img
          src={`weather/${icon}.png`}
          style={{ display: "none" }}
          onLoad={handleLoad}
        />
      )}
    </>
  )
}

export default WeatherIcon
