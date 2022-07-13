import { Loader } from "@mantine/core"
import { startTransition, useState } from "react"
import { Search } from "tabler-icons-react"
import {
  CityAutocompleteItem,
  SearchedCityAutocompleteItem,
} from "~/components/weather/CityAutocompleteItem"
import WidgetAutocomplete from "~/components/WidgetAutocomplete"
import cities from "~/constants/cities.json"
import isoToCountry from "~/constants/isoToCountry"
import { useWeather } from "~/contexts/WeatherContext"
import removeDiacritics from "~/utils/removeDiacritics"

const getSearchResults = (value) => {
  const keyWords = removeDiacritics(value)
    .toUpperCase()
    .replace(/\s+/g, " ") // remove extra spaces
    .replaceAll(",", "") // remove commas
    .split(" ")

  return cities.filter((city) =>
    keyWords.every(
      (word) =>
        removeDiacritics(city.name).toUpperCase().includes(word) ||
        city.state?.includes(word) ||
        isoToCountry[city.country].name.toUpperCase().includes(word) ||
        city.country.includes(word)
    )
  )
}

const constructValue = ({name, state, country}) =>
  `${name}${state ? `, ${state}` : ""}, ${country}`

const CityAutocomplete = () => {
  const { city, setCity, searchedCities, isLagging, isValidating } =
    useWeather()
  const [value, setValue] = useState(constructValue(city))
  const [searchResults, setSearchResults] = useState(cities)

  const handleBlur = () => setValue(constructValue(city))
  const handleFocus = () => setValue("")
  const handleChange = (newValue) => {
    startTransition(() => setSearchResults(getSearchResults(newValue)))
    setValue(newValue)
  }
  const handleItemSubmit = (item) => {
    startTransition(() => setSearchResults(getSearchResults(item.name)))
    setCity(item)
    setValue(constructValue(item))
  }

  return (
    <WidgetAutocomplete
      sx={{ flex: 1 }}
      variant="filled"
      size="md"
      placeholder="Search for a city"
      nothingFound="No cities found"
      icon={<Search size={16} />}
      rightSection={(isLagging || isValidating) && <Loader size="sm" />}
      value={value}
      data={value === "" ? searchedCities : searchResults}
      itemComponent={value === "" ? SearchedCityAutocompleteItem : CityAutocompleteItem}
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
