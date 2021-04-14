import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color:black;
  }

  div {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  footer {
    position: absolute;
    bottom: 10px;
    right: 0;
    left: 0;
    font-size: 12px;
    text-align: center;
    color: gray;
    opacity: 0.5;
  }
  
`;

export default GlobalStyle;
