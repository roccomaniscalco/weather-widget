import { useLocalStorage } from "@mantine/hooks"
import { node } from "prop-types"
import { createContext, useCallback, useContext } from "react"
import useWeatherData from "~/hooks/useWeatherData"

const defaultCity = {
  value: "4180439",
  name: "Atlanta",
  state: "GA",
  country: "US",
}

const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useLocalStorage({
    key: "city",
    defaultValue: defaultCity,
  })

  const [searchedCities, setSearchedCities] = useLocalStorage({
    key: "searchedCities",
    defaultValue: [defaultCity],
  })

  const [tempUnit, setTempUnit] = useLocalStorage({
    key: "tempUnit",
    defaultValue: "f",
  })

  const setCityAndSearchedCities = useCallback(
    (city) => {
      const newSearchedCities = Array.from(searchedCities).reverse()

      // if the city is already in the list, remove it first
      const index = newSearchedCities.findIndex((c) => c.value === city.value)
      if (index !== -1) newSearchedCities.splice(index, 1)
      // add the city to the end of the list
      newSearchedCities.push(city)
      // if the list is too long, remove the first item
      if (newSearchedCities.length > 5) newSearchedCities.shift()

      setSearchedCities(newSearchedCities.reverse())
      setCity(city)
    },
    [searchedCities, setSearchedCities, setCity]
  )

  const weatherValue = {
    city,
    setCity: setCityAndSearchedCities,
    tempUnit,
    setTempUnit,
    searchedCities,
  }

  return (
    <WeatherContext.Provider value={weatherValue}>
      {children}
    </WeatherContext.Provider>
  )
}

WeatherProvider.propTypes = {
  children: node,
}

const useWeather = () => {
  const weatherContext = useContext(WeatherContext)
  if (!weatherContext)
    throw new Error("useCity must be used within a CityProvider")

  const weatherData = useWeatherData(weatherContext.city.value)
  return { ...weatherContext, ...weatherData }
}

export { WeatherProvider, useWeather }
