import { useLocalStorage } from "@mantine/hooks"
import { node } from "prop-types"
import { createContext, useCallback, useContext } from "react"

const defaultCity = {
  value: "4180439",
  name: "Atlanta",
  state: "GA",
  country: "US",
}

const WeatherSettingsContext = createContext()

const WeatherSettingsProvider = ({ children }) => {
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

  return (
    <WeatherSettingsContext.Provider
      value={{
        city,
        setCity: setCityAndSearchedCities,
        tempUnit,
        setTempUnit,
        searchedCities,
      }}
    >
      {children}
    </WeatherSettingsContext.Provider>
  )
}

WeatherSettingsProvider.propTypes = {
  children: node,
}

const useWeatherSettings = () => {
  const weatherSettings = useContext(WeatherSettingsContext)
  if (!weatherSettings)
    throw new Error("useCity must be used within a CityProvider")

  return weatherSettings
}

export { WeatherSettingsProvider, useWeatherSettings }
