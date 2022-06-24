import { Text, Title } from "@mantine/core"
import React from "react"
import { city } from "~/constants/propTypes"
import useWeather from "~/hooks/useWeather"

const WeatherSummary = ({ city }) => {
  const { weather } = useWeather(city.id)

  return (
    <div>
      <Title size="xl">{weather.main.temp}</Title>
      <Text size="xl" color="dimmed" align="right">
        {weather.weather[0].description}
      </Text>
    </div>
  )
}

WeatherSummary.propTypes = {
  city: city.isRequired,
}

export default WeatherSummary
