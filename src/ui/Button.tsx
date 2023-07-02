import React from "react"
import styled, { FlattenSimpleInterpolation, css } from "styled-components"

import { colors } from "./colors"

type Props = {
  onClick: () => void
  children: JSX.Element | string
  disabled?: boolean
  customStyle?: FlattenSimpleInterpolation
}

export const Button: React.FC<Props> = ({
  onClick,
  children,
  disabled = false,
  customStyle,
}) => {
  return (
    <Wrapper
      onClick={onClick}
      customStyle={customStyle}
      disabled={disabled}
      type="button"
    >
      {children}
    </Wrapper>
  )
}

const MediumButtonStyle = css`
  padding: 10px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  height: 45px;
`

type WrapperProps = {
  customStyle?: FlattenSimpleInterpolation
}

const Wrapper = styled.button<WrapperProps>`
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  height: 100%;
  color: inherit;
  border: 1px solid ${colors.border};
  ${MediumButtonStyle}

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.15s linear;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    color: ${colors.text};
    border-color: ${colors.text};
  }

  ${({ customStyle }) => customStyle}
`
