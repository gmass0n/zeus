import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #__next {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  body {
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  
  fieldset {
    border: none;
  }
  
  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  input {
    border: none;
  }

  a {
    text-decoration: none;
  }
`;
