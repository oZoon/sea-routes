import React from "react"
import styled from "styled-components"

import { colors } from "@/ui/colors"
import { FIELD_SIZE } from "@/const"
import { getClick, getCoord } from "../../model/private"

export const CalcSeaField: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const coord = (e: MouseEvent) => {
      getCoord({
        x: e.offsetX,
        y: e.offsetY,
      })
    }

    ref && ref.current && ref.current.addEventListener("mousemove", coord)
  }, [])

  React.useEffect(() => {
    const click = (e: MouseEvent) => {
      getClick({
        x: e.offsetX,
        y: e.offsetY,
      })
    }

    ref && ref.current && ref.current.addEventListener("click", click)
  }, [])

  return <Container ref={ref} />
}

const Container = styled.div`
  position: absolute;
  min-width: ${FIELD_SIZE}px;
  min-height: ${FIELD_SIZE}px;
  width: ${FIELD_SIZE}px;
  height: ${FIELD_SIZE}px;
  margin: 24px;
  background-color: ${colors.transparent};
  border: 1px solid ${colors.border};
  cursor: crosshair;
`
