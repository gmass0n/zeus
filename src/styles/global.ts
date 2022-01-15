import { createGlobalStyle } from 'styled-components';

import signinBackground from '~/assets/images/signin-background.jpeg';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #__next {
    min-height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
  }

  body {
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
    overflow-y: auto;
  }

  main {
    background-color: ${({ theme }) => theme.colors.background};
    background-size: cover;
    background-position: 10% 0;
    background-repeat: no-repeat;
    background-image: ${({ theme }) =>
      `linear-gradient(transparent, ${theme.colors.background}de), url(${signinBackground.src})`};
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

  ul {
    list-style: none;
  }
`;
