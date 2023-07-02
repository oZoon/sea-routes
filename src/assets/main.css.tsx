import { colors } from "@/ui/colors"
import { createGlobalStyle } from "styled-components"

export const GlobalCSS = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    background-color: ${colors.background};
    color: ${colors.textGray};
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: subpixel-antialiased;
  }

  html {
    height: 100%;
  }

  #root {
    height: 100%;
    display: flex;
  }

  a {
    text-decoration: none;
    font-size: 0;
    line-height: 0;
  }

  img {
    max-width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`
