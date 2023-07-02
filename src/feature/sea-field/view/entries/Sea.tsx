import React from "react"

import { SeaField } from "./SeaField"
import { SeaPorts } from "./SeaPorts"
import { Routes } from "./Routes"
import { CurrentRoute } from "./CurrentRoute"
import { CalcSeaField } from "./CalcSeaField"

export const Sea: React.FC = () => (
  <>
    <SeaField>
      <SeaPorts />
      <Routes />
      <CurrentRoute />
    </SeaField>
    <CalcSeaField />
  </>
)
