import { useMouse, useViewportSize } from "@mantine/hooks"
import { node } from "prop-types"

const PerspectiveBox = ({ children }) => {
  const { width, height } = useViewportSize()
  const { x, y } = useMouse()
  const center = { x: width / 2, y: height / 2 }
  const rotateY = (x - center.x) / (center.x / 20)
  const rotateX = -(y - center.y) / (center.y / 20)

  return (
    <div style={{ perspective: 400 }}>
      <div
        style={{
          transform: `
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

PerspectiveBox.propTypes = {
  children: node,
}

export default PerspectiveBox
