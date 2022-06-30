import { Group, Text } from "@mantine/core"
import { node, string } from "prop-types"

const WeatherDetailsItem = ({ icon, title, figure }) => {
  return (
    <Group spacing="xs" noWrap>
      {icon}
      <div>
        <Text size="xs" color="dimmed">
          {title}
        </Text>
        <Text size="md">{figure}</Text>
      </div>
    </Group>
  )
}

WeatherDetailsItem.propTypes = {
  icon: node.isRequired,
  title: string.isRequired,
  figure: string.isRequired,
}

export default WeatherDetailsItem
