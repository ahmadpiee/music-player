import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Lato", sans-serif;
    text,
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        color: #464646;
    }
  }
`;

export default GlobalStyle;
