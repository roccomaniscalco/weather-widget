import { Transition } from "@mantine/core"
import { city } from "~/constants/propTypes"
import weatherCodeToIcon from "~/constants/weatherCodeToIcon"
import useWeather from "~/hooks/useWeather"

const WeatherIcon = ({ city }) => {
  const { weather, isLagging } = useWeather(city.id)
  const icon = weatherCodeToIcon[weather.weather[0].icon]

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -60%)",
      }}
    >
      <Transition
        transition="fade"
        duration={100}
        timingFunction="ease"
        mounted={!isLagging}
      >
        {(styles) => (
          <div styles={styles}>
            <img src={`weather/${icon}`} width={300} />
          </div>
        )}
      </Transition>
    </div>
  )
}

WeatherIcon.propTypes = {
  city: city,
}

export default WeatherIcon
