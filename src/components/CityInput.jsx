import { Loader } from "@mantine/core"
import { startTransition, useState } from "react"
import { Search } from "tabler-icons-react"
import {
  CityInputItem,
  SearchedCityInputItem,
} from "~/components/CityInputItem"
import WidgetAutocomplete from "~/components/WidgetAutocomplete"
import citiesData from "~/constants/cities.json"
import isoToCountry from "~/constants/isoToCountry"
import { useWeather } from "~/contexts/WeatherContext"
import removeDiacritics from "~/utils/removeDiacritics"

const cities = citiesData.map((city) => ({
  value: city.id.toString(),
  ...city,
}))

const getSearchResults = (value) => {
  const keyWords = removeDiacritics(value)
    .toUpperCase()
    .replace(/\s+/g, " ") // remove extra spaces
    .replace(/,/g, "") // remove commas
    .split(" ")

  return cities.filter((city) =>
    keyWords.every(
      (word) =>
        removeDiacritics(city.name).toUpperCase().includes(word) ||
        city.state.includes(word) ||
        isoToCountry[city.country]?.name?.toUpperCase()?.includes(word) ||
        city.country.includes(word)
    )
  )
}

const constructValue = (city) =>
  `${city.name}${city.state && ", "}${city.state}${city.country && ", "}${
    city.country
  }`

const CityInput = () => {
  const { city, setCity, searchedCities, isLoading } = useWeather()
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
      size="md"
      placeholder="Search for a city"
      nothingFound="No cities found"
      icon={<Search size={16} />}
      rightSection={isLoading && <Loader size="sm" />}
      value={value}
      data={value === "" ? searchedCities : searchResults}
      itemComponent={value === "" ? SearchedCityInputItem : CityInputItem}
      onChange={handleChange}
      onItemSubmit={handleItemSubmit}
      onBlur={handleBlur}
      onFocus={handleFocus}
      filter={(_value, item) => item} // hack to make the autocomplete work
      aria-label="City input"
    />
  )
}

export default CityInput
