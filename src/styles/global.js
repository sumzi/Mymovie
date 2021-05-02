import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    //background-color:;
    min-width: 330px;
  }

  div {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
  
 
`;

export default GlobalStyle;
