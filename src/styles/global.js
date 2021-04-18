import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');

  body {
    margin: 0;
    padding: 0;
    background-color:black;
    min-width: 330px;
  }

  div {
    box-sizing: border-box;
    color: white;
  }

  a {
    text-decoration: none;
  }

  h1 {
    color: white;
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
