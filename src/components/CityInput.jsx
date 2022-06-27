import { Loader, Space } from "@mantine/core"
import { useDeferredValue, useState } from "react"
import { Search } from "tabler-icons-react"
import CityInputItem from "~/components/CityInputItem"
import WidgetAutocomplete from "~/components/WidgetAutocomplete"
import citiesData from "~/constants/cities.json"
import isoToCountry from "~/constants/isoToCountry"
import { useCity } from "~/contexts/CityContext"
import useWeather from "~/hooks/useWeather"

const cities = citiesData.map((city) => ({ value: `${city.id}`, ...city }))

const filterCities = (value, cities) => {
  const words = value.toLowerCase().trim().split(" ")
  return cities.filter((city) =>
    words.every(
      (word) =>
        city.name.toLowerCase().includes(word) ||
        city.state.toLowerCase().includes(word) ||
        isoToCountry[city?.country]?.name?.toLowerCase()?.includes(word)
    )
  )
}

const CityInput = () => {
  const { city, searchCity } = useCity()
  const { isLagging } = useWeather(city.id)
  const [value, setValue] = useState(city.name)
  const filteredCities = useDeferredValue(filterCities(value, cities))

  const handleBlur = () => setValue(city.name)
  const handleFocus = () => setValue("")
  const handleChange = (newValue) => setValue(newValue)
  const handleItemSubmit = (item) => {
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
      itemComponent={CityInputItem}
      data={filteredCities}
      value={value}
      onChange={handleChange}
      onItemSubmit={handleItemSubmit}
      onBlur={handleBlur}
      onFocus={handleFocus}
      filter={(_value, item) => item} // hack to make the autocomplete work
      aria-label="City input"
      rightSection={isLagging ? <Loader size="sm" /> : <Space />}
    />
  )
}

export default CityInput
