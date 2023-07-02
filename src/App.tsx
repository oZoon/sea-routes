import React from "react"

import "@/assets/common.css"
import "@/assets/lato.css"
import { GlobalCSS } from "@/assets/main.css"
import { Manage } from "./feature/manage-sea"
import { Sea } from "./feature/sea-field"
import "./init"
import { LayoutPage } from "./pages/layout"

export const App: React.FC = () => (
  <LayoutPage>
    <GlobalCSS />
    <Sea />
    <Manage />
  </LayoutPage>
)
