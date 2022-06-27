import { Center, Skeleton, Transition } from "@mantine/core"
import { useMouse, useViewportSize } from "@mantine/hooks"
import weatherCodeToIcon from "~/constants/weatherCodeToIcon"
import { useCity } from "~/contexts/CityContext"
import useWeather from "~/hooks/useWeather"

const WeatherIcon = () => {
  const { city } = useCity()
  const { weather, isLagging } = useWeather(city.id)
  const icon = weatherCodeToIcon[weather?.weather[0]?.icon]

  const { width, height } = useViewportSize()
  const { x, y } = useMouse()
  const center = { x: width / 2, y: height / 2 }
  const rotateY = (x - center.x) / (center.x / 20)
  const rotateX = (y - center.y) / (center.y / 20)

  if (!icon) return <Skeleton sx={{ flex: 1 }} />

  return (
    <Center>
      <Transition
        transition="scale"
        duration={400}
        timingFunction="ease"
        mounted={!isLagging || !icon}
      >
        {(styles) => (
          <div style={{ ...styles, perspective: 500 }}>
            <img
              src={icon && `weather/${icon}.png`}
              width={260}
              alt={icon}
              style={{
                transform: `
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg)`,
              }}
            />
          </div>
        )}
      </Transition>
    </Center>
  )
}

export default WeatherIcon
