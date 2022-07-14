import { useState } from "react"
import { Search } from "tabler-icons-react"
import {
  CityAutocompleteItem,
  SearchedCityAutocompleteItem
} from "~/components/weather/CityAutocompleteItem"
import WidgetAutocomplete from "~/components/WidgetAutocomplete"
import cities from "~/constants/cities.json"
import isoToCountry from "~/constants/isoToCountry"
import { useWeatherSettings } from "~/contexts/WeatherSettingsContext"
import removeDiacritics from "~/utils/removeDiacritics"

const getSearchResults = (value) => {
  const keyWords = removeDiacritics(value)
    .toUpperCase()
    .replace(/\s+/g, " ") // remove extra spaces
    .replaceAll(",", "")
    .split(" ")

  return cities.filter((city) =>
    keyWords.every(
      (word) =>
        // city name includes word
        removeDiacritics(city.name).toUpperCase().includes(word) ||
        // state includes word
        city.state?.includes(word) ||
        // country includes word
        isoToCountry[city.country].name.toUpperCase().includes(word) ||
        // country abbreviation includes word
        city.country.includes(word)
    )
  )
}

const cityToString = ({ name, state, country }) =>
  `${name}${state ? `, ${state}` : ""}, ${country}`

const CityAutocomplete = () => {
  const { city, setCity, searchedCities } = useWeatherSettings()
  const [value, setValue] = useState(cityToString(city))
  const [searchResults, setSearchResults] = useState(cities)

  const handleBlur = () => setValue(cityToString(city))
  const handleFocus = () => setValue("")
  const handleChange = (newValue) => {
    setSearchResults(getSearchResults(newValue))
    setValue(newValue)
  }
  const handleItemSubmit = (item) => {
    setSearchResults(getSearchResults(item.name))
    setCity(item)
    setValue(cityToString(item))
  }

  return (
    <WidgetAutocomplete
      sx={{ flex: 1 }}
      variant="filled"
      size="md"
      placeholder="Search for a city"
      nothingFound="No cities found"
      icon={<Search size={16} />}
      value={value}
      data={value === "" ? searchedCities : searchResults}
      itemComponent={
        value === "" ? SearchedCityAutocompleteItem : CityAutocompleteItem
      }
      onChange={handleChange}
      onItemSubmit={handleItemSubmit}
      onBlur={handleBlur}
      onFocus={handleFocus}
      filter={(_value, item) => item} // hack to make the autocomplete work
      aria-label="City input"
    />
  )
}

export default CityAutocomplete
