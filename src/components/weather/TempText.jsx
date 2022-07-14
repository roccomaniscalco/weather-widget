import { Text } from "@mantine/core"
import { number } from "prop-types"
import { useWeatherSettings } from "~/contexts/WeatherSettingsContext"
import { kelvinToCelsius, kelvinToFahrenheit } from "~/utils/convertKelvin"

const TempText = ({ children, ...props }) => {
  const { tempUnit } = useWeatherSettings()
  const temp =
    tempUnit === "c" ? kelvinToCelsius(children) : kelvinToFahrenheit(children)

  return <Text {...props}>{temp}º</Text>
}

TempText.propTypes = {
  children: number.isRequired,
}

export default TempText
