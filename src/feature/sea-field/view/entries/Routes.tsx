/* eslint-disable react/display-name */
import { useStore } from "effector-react"
import React from "react"
import styled from "styled-components"

import { colors } from "@/ui/colors"
import { $routes } from "../../model"

export const Routes = React.memo(() => {
  const routes = useStore($routes)

  if (routes === null) return null

  return routes.map((item, index) => {
    const start = item[0]
    const end = item[1]

    const deltaX = end.x - start.x
    const deltaY = end.y - start.y
    const hypotenuse = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    const angle =
      Math.abs((180 / Math.PI) * Math.acos(deltaY / hypotenuse)) *
      (deltaX > 0 ? -1 : 1)

    return (
      <Item
        key={index}
        startX={start.x}
        startY={start.y}
        length={hypotenuse}
        angle={angle}
      />
    )
  })
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
  background-color: ${colors.marked};
  height: ${({ length }) => length}px;
  width: 1px;
  transform: rotate(${({ angle }) => angle}deg);
  transform-origin: 0 0;
`
