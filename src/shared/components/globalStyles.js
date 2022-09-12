import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: background 0.5s ease-in-out, border 0.5s ease-in-out;
    width: 100vw;
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: row;
    height: 100%
  }
  `;
