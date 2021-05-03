import { createGlobalStyle } from 'styled-components';
import {dark,light} from './variables';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    min-width: 330px;
    background-color: ${props => props.mode ? `${dark.backgroundColor}`:`${light.backgroundColor}`};
    color: ${props => props.mode ? `${dark.color}`:`${light.color}`};
  }

  div {
    box-sizing: border-box;
    color: ${props => props.mode ? `${dark.color}`:`${light.color}`};
  }

  a {
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
  
 
`;

export default GlobalStyle;
