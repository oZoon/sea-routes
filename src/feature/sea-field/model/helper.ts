import { PortItem, SpaceItem } from "./types"

export const getPortItem = (
  space: SpaceItem[] | null,
  coords: { x: number; y: number } | null,
  ports: PortItem[] | null
): PortItem | null => {
  let result: PortItem | null = null
  if (space !== null && coords !== null && ports !== null) {
    space.forEach((item, index) => {
      if (
        item.xs < coords.x &&
        coords.x < item.xf &&
        item.ys < coords.y &&
        coords.y < item.yf
      ) {
        result = ports[index]
      }
    })
  }

  return result
}
