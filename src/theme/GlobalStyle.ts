/* reset css */

import { createGlobalStyle } from 'styled-components'
import theme, { fontPrimary } from '.'

const { black } = theme.colors

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  }

  html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%;
}

body {
font-family: ${fontPrimary.fontFamily};
background-color: ${black};
}

a {
  text-decoration: none;
}
`
