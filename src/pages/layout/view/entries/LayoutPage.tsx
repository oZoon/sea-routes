import React from "react"
import styled from "styled-components"

import { WIDTH_DEFAULT } from "../../model"

type Props = {
  children: (JSX.Element | string)[]
}

export const LayoutPage: React.FC<Props> = ({ children }) => (
  <Container>{children}</Container>
)

const Container = styled.div`
  height: 100%;
  width: ${WIDTH_DEFAULT}px;
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-start;
  margin: 0 auto;
  position: relative;
`
