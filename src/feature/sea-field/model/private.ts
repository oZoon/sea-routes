import { FIELD_SIZE, PORT_COUNT } from "@/const"
import { d } from "./domain"
import { Coords, PortItem } from "./types"

export const fillPortsFx = d.effect((): PortItem[] => {
  return Array(PORT_COUNT)
    .fill(null)
    .map((_, index) => ({
      x: Math.floor(Math.random() * (FIELD_SIZE - 50)) + 25,
      y: Math.floor(Math.random() * (FIELD_SIZE - 50)) + 25,
      name: (index + 1).toString()
    }))
})

export const $coord = d.store<Coords | null>(null)
export const getCoord = d.event<Coords>()
export const resetCoord = d.event()
export const $lightPort = d.store<PortItem | null>(null)

export const getClick = d.event<Coords>()
export const $click = d.store<Coords | null>(null)
