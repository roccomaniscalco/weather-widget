import { useLocalStorage } from "@mantine/hooks"
import { node } from "prop-types"
import { createContext, useCallback, useContext } from "react"

const defaultCity = {
  id: 4180439,
  value: "4180439",
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
      const newSearchedCities = Array.from(searchedCities).reverse()

      // if the city is already in the list, remove it first
      const index = newSearchedCities.findIndex((c) => c.id === city.id)
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

  const cityValue = { city, searchCity, searchedCities }

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
