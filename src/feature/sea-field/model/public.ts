import { FIELD_SIZE, RANGE_PORT_ACTIVE } from "@/const"
import { d } from "./domain"
import { Coords, PortItem } from "./types"

export const $ports = d.store<PortItem[] | null>(null)
export const init = d.event()
export const $activeSpace = $ports.map((ports) =>
  ports
    ? ports.map((item) => ({
        xs: item.x - RANGE_PORT_ACTIVE < 0 ? 0 : item.x - RANGE_PORT_ACTIVE,
        xf:
          item.x + RANGE_PORT_ACTIVE > FIELD_SIZE
            ? FIELD_SIZE
            : item.x + RANGE_PORT_ACTIVE,
        ys: item.y - RANGE_PORT_ACTIVE < 0 ? 0 : item.y - RANGE_PORT_ACTIVE,
        yf:
          item.y + RANGE_PORT_ACTIVE > FIELD_SIZE
            ? FIELD_SIZE
            : item.y + RANGE_PORT_ACTIVE
      }))
    : null
)

export const $markPorts = d.store<PortItem[] | null>(null)
export const $routes = d.store<[PortItem, PortItem][] | null>(null)
export const $currentRoute = d.store<{ port: PortItem; coord: Coords } | null>(
  null
)
