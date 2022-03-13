import { createGlobalStyle } from "styled-components";



const GlobalStyles = createGlobalStyle`
      
  *{
    box-sizing: border-box;
  }
  
  html{
    margin: 0;
    padding: 0;
    width: 100%;
    max-height: 100%;
    overflow-x: hidden;
  }
  
  
  body{
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    min-width: 320px;
    overflow-x: hidden;
  }
`

export default GlobalStyles;