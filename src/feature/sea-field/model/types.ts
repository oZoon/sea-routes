export type Coords = {
  x: number
  y: number
}

export type PortItem = Coords & {
  name: string
}

export type SpaceItem = {
  xs: number
  xf: number
  ys: number
  yf: number
}
