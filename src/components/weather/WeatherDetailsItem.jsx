import { Group, Text } from "@mantine/core"
import { node, string } from "prop-types"

const WeatherDetailsItem = ({ icon, title, children }) => {
  return (
    <Group spacing="xs" pt="xs" noWrap>
      {icon}
      <div>
        <Text size="xs" color="dimmed">
          {title}
        </Text>
        <Text size="md">{children}</Text>
      </div>
    </Group>
  )
}

WeatherDetailsItem.propTypes = {
  icon: node.isRequired,
  title: string.isRequired,
  children: node.isRequired,
}

export default WeatherDetailsItem
