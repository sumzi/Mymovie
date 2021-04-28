import styled from 'styled-components';
import { device } from '../../../styles/variables';

const SubWrapper = styled.div`
  //border: 10px solid yellow;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  padding: 0 10px;

  @media ${device.tablet} {
    padding: 10px;
    height: 100%;
    position: relative;
    width: 300px;
  }
`;

const Menu = styled.div`
  //border: 5px solid white;
  z-index: 10;
  cursor: pointer;
  color: ${props => props.flag?'white':'gray'};
  font-weight: bold;
  font-size: 19px;
  &:hover {
    transform: scale(1.15);
    transition: .2s;
  }
  @media ${device.tablet} {
    margin: 10px;
    width: 100%;
    font-size: 28px;
    text-align: left;
  }
`;


export { SubWrapper, Menu };