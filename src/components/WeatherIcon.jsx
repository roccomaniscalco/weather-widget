import React from "react"
import { city } from "~/constants/propTypes"
import weatherCodeToIcon from "~/constants/weatherCodeToIcon"
import useWeather from "~/hooks/useWeather"

const WeatherIcon = ({ city }) => {
  const { weather } = useWeather(city.id)
  console.log(weather)

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -60%)",
      }}
    >
      <img
        src={`weather/${weatherCodeToIcon[weather.weather[0].icon]}`}
        width={220}
      />
    </div>
  )
}

WeatherIcon.propTypes = {
  city: city,
}

export default WeatherIcon
