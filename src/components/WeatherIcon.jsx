import { Transition } from "@mantine/core"
import { city } from "~/constants/propTypes"
import weatherCodeToIcon from "~/constants/weatherCodeToIcon"
import useWeather from "~/hooks/useWeather"

const WeatherIcon = ({ city }) => {
  const { weather, isLagging } = useWeather(city.id)
  const icon = weatherCodeToIcon[weather?.weather[0]?.icon]

  return (
    <div>
      <Transition
        transition="scale"
        duration={400}
        timingFunction="ease"
        mounted={!isLagging || !icon}
      >
        {(styles) => (
          <div style={{ ...styles }}>
            <img src={`weather/${icon}`} width={280} />
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
