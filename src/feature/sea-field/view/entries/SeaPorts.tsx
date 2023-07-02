/* eslint-disable react/display-name */
import { useStore } from "effector-react"
import React from "react"
import styled, { css } from "styled-components"

import { PORT_SIZE } from "@/const"
import { colors } from "@/ui/colors"
import { $markPorts, $ports, init } from "../../model"
import { $lightPort } from "../../model/private"

export const SeaPorts = React.memo(() => {
  const ports = useStore($ports)
  const lightPort = useStore($lightPort)
  const markPorts = useStore($markPorts)

  React.useEffect(() => {
    init()
  }, [])

  return ports?.map((item) => {
    let color = colors.text
    const isMarked = markPorts?.some((port) => port.name === item.name) || false

    if (item.name === lightPort?.name) {
      color = colors.active
    }

    if (isMarked) {
      color = colors.marked
    }

    return <Item {...item} key={item.name} color={color} isMarked={isMarked} />
  })
})

type ItemProps = {
  x: number
  y: number
  color: string
  isMarked: boolean
}

const Item = styled.div<ItemProps>`
  position: absolute;
  left: ${({ x }) => x - PORT_SIZE / 2}px;
  top: ${({ y }) => y - PORT_SIZE / 2}px;
  color: ${colors.text};
  height: ${PORT_SIZE}px;
  width: ${PORT_SIZE}px;
  border: 1px solid ${({ color }) => color};
  border-radius: 50%;
  ${({ isMarked }) =>
    isMarked &&
    css`
      background-color: ${colors.marked};
    `}
`
