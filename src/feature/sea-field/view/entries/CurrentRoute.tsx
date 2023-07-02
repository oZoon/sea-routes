/* eslint-disable react/display-name */
import { useStore } from "effector-react"
import React from "react"
import styled from "styled-components"

import { colors } from "@/ui/colors"
import { $currentRoute } from "../../model"

export const CurrentRoute = React.memo(() => {
  const currentRoute = useStore($currentRoute)

  if (currentRoute === null) return null

  const start = currentRoute.port
  const end = currentRoute.coord

  const deltaX = end.x - start.x
  const deltaY = end.y - start.y
  const hypotenuse = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
  const angle =
    Math.abs((180 / Math.PI) * Math.acos(deltaY / hypotenuse)) *
    (deltaX > 0 ? -1 : 1)

  return (
    <Item startX={start.x} startY={start.y} length={hypotenuse} angle={angle} />
  )
})

type ItemProps = {
  startX: number
  startY: number
  length: number
  angle: number
}

const Item = styled.div<ItemProps>`
  position: absolute;
  left: ${({ startX }) => startX}px;
  top: ${({ startY }) => startY}px;
  color: ${colors.text};
  background-color: ${colors.active};
  height: ${({ length }) => length}px;
  width: 1px;
  transform: rotate(${({ angle }) => angle}deg);
  transform-origin: 0 0;
`
