import { Box } from "@mantine/core"
import { useMouse, useViewportSize } from "@mantine/hooks"
import { node, object } from "prop-types"

const PerspectiveBox = ({ children, styles }) => {
  const { width, height } = useViewportSize()
  const { x, y } = useMouse()
  const center = { x: width / 2, y: height / 2 }
  const rotateY = (x - center.x) / (center.x / 20)
  const rotateX = (y - center.y) / (center.y / 20)

  return (
    <Box style={{ perspective: 400, ...styles }}>
      <div
        style={{
          transform: `
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)`,
        }}
      >
        {children}
      </div>
    </Box>
  )
}

PerspectiveBox.propTypes = {
  children: node,
  styles: object,
}

export default PerspectiveBox
