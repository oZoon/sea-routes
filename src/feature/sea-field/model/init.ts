import { forward, sample } from "effector"

import { CLEAR_ZONE, FIELD_SIZE, PORT_COUNT } from "@/const"
import { getPortItem } from "./helper"
import {
  $click,
  $coord,
  $lightPort,
  fillPortsFx,
  getClick,
  getCoord,
  resetCoord
} from "./private"
import {
  $activeSpace,
  $currentRoute,
  $markPorts,
  $ports,
  $routes,
  init
} from "./public"
import { PortItem } from "./types"

$ports.on(fillPortsFx.doneData, (_, f) => f)

$coord.on(getCoord, (_, c) => c).reset(resetCoord)

$click.on(getClick, (_, g) => g)

$routes.on($markPorts, (_, ports) => {
  const result: [PortItem, PortItem][] = []
  if (ports !== null && ports.length >= 2) {
    for (let i = 1; i < ports.length; i++) {
      result.push([ports[i - 1], ports[i]])
    }
  }
  return result
})

forward({
  from: init,
  to: fillPortsFx
})

sample({
  clock: $coord.updates,
  source: { space: $activeSpace, ports: $ports },
  fn: ({ space, ports }, coords) => getPortItem(space, coords, ports),
  target: $lightPort
})

sample({
  clock: getClick,
  source: { space: $activeSpace, ports: $ports, markPorts: $markPorts },
  fn: ({ space, ports, markPorts }, coords) => {
    const port = getPortItem(space, coords, ports)
    if (port) {
      if (markPorts) {
        const isMarked = markPorts.some((item) => item.name === port.name)
        if (!isMarked) {
          return [...markPorts].concat(port)
        }
        return markPorts
      }
      return [port]
    }
    return markPorts
  },
  target: $markPorts
})

sample({
  clock: $coord,
  source: { ports: $markPorts, coord: $coord },
  filter: ({ ports, coord }) => Boolean(ports) && Boolean(coord),
  fn: ({ ports, coord }) => {
    if (
      ports !== null &&
      coord !== null &&
      ports.length < PORT_COUNT &&
      coord.x > CLEAR_ZONE &&
      coord.x < FIELD_SIZE - CLEAR_ZONE &&
      coord.y > CLEAR_ZONE &&
      coord.y < FIELD_SIZE - CLEAR_ZONE
    ) {
      return {
        port: ports[ports.length - 1],
        coord
      }
    }
    return null
  },
  target: $currentRoute
})
