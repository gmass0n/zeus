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
`;
