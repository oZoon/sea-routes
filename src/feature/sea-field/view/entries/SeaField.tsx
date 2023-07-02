import React from "react"
import styled from "styled-components"

import { colors } from "@/ui/colors"
import { FIELD_SIZE } from "@/const"

type Props = {
  children?: JSX.Element[]
}

export const SeaField: React.FC<Props> = ({ children }) => (
  <Container>{children}</Container>
)

const Container = styled.div`
  position: absolute;
  min-width: ${FIELD_SIZE}px;
  min-height: ${FIELD_SIZE}px;
  width: ${FIELD_SIZE}px;
  height: ${FIELD_SIZE}px;
  margin: 24px;
  background-color: ${colors.background};
  border: 1px solid ${colors.border};
`
