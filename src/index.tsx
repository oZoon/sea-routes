/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"

const container = document.getElementById("root")
const root = container && createRoot(container)
root && root.render(<App />)
