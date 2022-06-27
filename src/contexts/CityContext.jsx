import { useLocalStorage } from "@mantine/hooks"
import { node } from "prop-types"
import { createContext, useCallback, useContext } from "react"

const defaultCity = {
  id: 4180439,
  name: "Atlanta",
  state: "GA",
  country: "US",
  coord: {
    lon: -84.387978,
    lat: 33.749001,
  },
}

const CityContext = createContext()

const CityProvider = ({ children }) => {
  const [city, setCity] = useLocalStorage({
    key: "city",
    defaultValue: defaultCity,
  })

  const [searchedCities, setSearchedCities] = useLocalStorage({
    key: "searchedCities",
    defaultValue: [defaultCity],
  })

  const searchCity = useCallback(
    (city) => {
      // if the city is already in the list, remove it and add it to the end
      const searchedCitiesSet = new Set(searchedCities)
      if (searchedCitiesSet.has(city.id)) searchedCitiesSet.delete(city.id)
      searchedCitiesSet.add(city.id)

      // keep the list at a max of 5 cities
      const newSearchedCities = Array.from(searchedCitiesSet)
      if (newSearchedCities.length > 5) newSearchedCities.shift()

      setSearchedCities(newSearchedCities)
      setCity(city)
    },
    [searchedCities, setSearchedCities, setCity]
  )

  const cityValue = { city, searchCity }

  return (
    <CityContext.Provider value={cityValue}>{children}</CityContext.Provider>
  )
}

CityProvider.propTypes = {
  children: node,
}

const useCity = () => {
  const cityContext = useContext(CityContext)
  if (!cityContext) {
    throw new Error("useCity must be used within a CityProvider")
  }
  return cityContext
}

export { CityProvider, useCity }
