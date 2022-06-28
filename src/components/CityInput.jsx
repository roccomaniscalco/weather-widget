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
import { useCity } from "~/contexts/CityContext"
import useWeather from "~/hooks/useWeather"
import removeDiacritics from "~/utils/removeDiacritics"

const cities = citiesData.map((city) => ({ value: `${city.id}`, ...city }))

const getSearchResults = (value) => {
  const keyWords = removeDiacritics(value).toLowerCase().trim().split(" ")

  return cities.filter((city) =>
    keyWords.every(
      (word) =>
        removeDiacritics(city.name).toLowerCase().includes(word) ||
        city.state.toLowerCase().includes(word) ||
        isoToCountry[city.country]?.name?.toLowerCase()?.includes(word)
    )
  )
}

const CityInput = () => {
  const { city, searchCity, searchedCities } = useCity()
  const { isLoading } = useWeather(city.id)
  const [value, setValue] = useState(city.name)
  const [searchResults, setSearchResults] = useState(cities)

  const handleBlur = () => setValue(city.name)
  const handleFocus = () => setValue("")
  const handleChange = (newValue) => {
    startTransition(() => {
      setSearchResults(getSearchResults(newValue))
    })
    setValue(newValue)
  }
  const handleItemSubmit = (item) => {
    startTransition(() => {
      setSearchResults(getSearchResults(item.name))
    })
    searchCity(item)
    setValue(item.name)
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
