import { Group, Text } from "@mantine/core"
import { string } from "prop-types"
import { forwardRef } from "react"
import isoToCountry from "~/constants/isoToCountry"

const CityInputItem = forwardRef(({ name, state, country, ...props }, ref) => (
  <div ref={ref} {...props}>
    <Group noWrap>
      <Text size="lg">{isoToCountry[country]?.flag}</Text>
      <div>
        <Text>{name}</Text>
        <Text size="xs" color="dimmed">
          {state && `${state}, `}
          {isoToCountry[country]?.name}
        </Text>
      </div>
    </Group>
  </div>
))

CityInputItem.propTypes = {
  name: string.isRequired,
  state: string,
  country: string.isRequired,
}

CityInputItem.displayName = "CityInputItem"
export default CityInputItem
