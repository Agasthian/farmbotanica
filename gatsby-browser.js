import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
* {
  outline: none;
  box-sizing: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  
  html{
    font-size:62.5%; //1rem=10px
    box-sizing:border-box;
    line-height:1.15;
    scroll-behavior: smooth;
    
    @media ${props => props.theme.mediaQueries.large} {
      font-size: 60%;
    }
  
    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 57.5%;
    }
  
    @media ${props => props.theme.mediaQueries.small} { 
        font-size: 55%;
    }
  }
  
  body{
    font-family: ${props => props.theme.fonts.para};
    font-size:1.6rem;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    --primary: ${props => props.theme.colors.main1};
    --secondary: ${props => props.theme.colors.main2};
    --navbar: rgba(255, 255, 255, 0.95);
    --text: ${props => props.theme.colors.dark1};
    --text-dark3: ${props => props.theme.colors.dark3};
    --light-text:${props => props.theme.colors.light1};
    --white: #fff;
    --shadow-btn: rgba(7, 49, 69, .1);
    --shadow-color: rgba(0, 0, 0, 0.1);
    --shadow-light: rgba(0, 0, 0, 0.3);
    --shadow-dark: rgba(0, 0, 0, 0.5);
  }
   
form,
input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

a:focus, a:hover {
  text-decoration: none;
  cursor: pointer;
}
p, ol{
  font-family: ${props => props.theme.fonts.para};
  font-size: 1.6rem;
  font-weight:500;
  color:rgba(56, 60, 80, 0.9);
}

  h1,h2,h3,h4,h5{
    font-family: ${props => props.theme.fonts.main};
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
