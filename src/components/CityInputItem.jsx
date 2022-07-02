import { Center, Group, Text } from "@mantine/core"
import { bool, string } from "prop-types"
import { forwardRef } from "react"
import { History } from "tabler-icons-react"
import isoToCountry from "~/constants/isoToCountry"

export const CityInputItem = forwardRef(
  ({ name, state, country, hasBeenSearched, ...props }, ref) => (
    <div ref={ref} {...props}>
      <Group noWrap>
        <Text size="lg">{isoToCountry[country].flag}</Text>
        <div style={{ flex: 1 }}>
          <Text>{name}</Text>
          <Text size="xs" color="dimmed">
            {state && `${state}, `}
            {isoToCountry[country].name}
          </Text>
        </div>
        {hasBeenSearched && (
          <Center sx={(theme) => ({ color: theme.colors.dark[2] })}>
            <History size={18} />
          </Center>
        )}
      </Group>
    </div>
  )
)

CityInputItem.displayName = "CityInputItem"
CityInputItem.propTypes = {
  name: string.isRequired,
  state: string,
  country: string.isRequired,
  hasBeenSearched: bool,
}

export const SearchedCityInputItem = forwardRef((props, ref) => (
  <CityInputItem ref={ref} {...props} hasBeenSearched />
))

SearchedCityInputItem.displayName = "SearchedCityInputItem"
