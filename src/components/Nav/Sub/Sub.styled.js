import styled from 'styled-components';
import { device } from '../../../styles/variables';

const SubWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  //border: 1px solid blue;
  height: 60px;
  width: 80%;
  margin: 0 auto;
  line-height: 60px;
  font-size: 20px;
  text-shadow: 2px 2px 2px black;
  opacity: 0;
  transition: 1s;
  &:hover {
    opacity: 1;
    transition: 1s;
  }
`;

const Menu = styled.div`
  //border: 2px solid red;
  cursor: pointer;
  color: gray;
  &:hover {
    color: white;
  }
`;


export { SubWrapper, Menu };