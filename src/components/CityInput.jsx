import { Group, Loader } from "@mantine/core"
import { func } from "prop-types"
import { useState, useTransition } from "react"
import { Search } from "tabler-icons-react"
import CityInputItem from "~/components/CityInputItem"
import WidgetAutocomplete from "~/components/WidgetAutocomplete"
import { city } from "~/constants/propTypes"
import citiesData from "~/constants/cities.json"
import isoToCountry from "~/utils/isoToCountry"

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

const CityInput = ({ city, setCity }) => {
  const [value, setValue] = useState(city.name)
  const [filteredCities, setFilteredCities] = useState(cities)
  const [isFiltering, startIsFiltering] = useTransition()

  const handleBlur = () => setValue(city.name)
  const handleFocus = () => {
    setValue("")
    startIsFiltering(() => {
      setFilteredCities(filterCities("", cities))
    })
  }
  const handleChange = (newValue) => {
    setValue(newValue)
    startIsFiltering(() => {
      setFilteredCities(filterCities(newValue, cities))
    })
  }
  const handleItemSubmit = (item) => {
    setCity(item)
    setValue(item.name)
  }

  return (
    <Group>
      <WidgetAutocomplete
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
      />
      {isFiltering && <Loader size="sm" />}
    </Group>
  )
}

CityInput.propTypes = {
  city: city.isRequired,
  setCity: func.isRequired,
}

export default CityInput
