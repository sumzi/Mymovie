import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

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
  
 
`;

export default GlobalStyle;
