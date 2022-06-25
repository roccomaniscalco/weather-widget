import { Transition } from "@mantine/core"
import { useMouse, useViewportSize } from "@mantine/hooks"
import { city } from "~/constants/propTypes"
import weatherCodeToIcon from "~/constants/weatherCodeToIcon"
import useWeather from "~/hooks/useWeather"

const WeatherIcon = ({ city }) => {
  const { weather, isLagging } = useWeather(city.id)
  const icon = weatherCodeToIcon[weather?.weather[0]?.icon]

  const { width, height } = useViewportSize()
  const { x, y } = useMouse()
  const center = { x: width / 2, y: height / 2 }
  const rotateY = (x - center.x) / (center.x / 20)
  const rotateX = (y - center.y) / (center.y / 20)

  return (
    <Transition
      transition="scale"
      duration={400}
      timingFunction="ease"
      mounted={!isLagging || !icon}
    >
      {(styles) => (
        <div style={{ ...styles, perspective: 500 }}>
          <img
            src={`weather/${icon}.png`}
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
  )
}

WeatherIcon.propTypes = {
  city: city.isRequired,
}

export default WeatherIcon
