import styled from 'styled-components';
import { device } from '../../../styles/variables';

const SubWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  //border: 1px solid blue;
  height: 40px;
  width: 100 %;
  margin: 0 auto;
  line-height: 40px;
  @media ${device.tablet} {
    padding: 0 120px;
  }
  z-index: 20;
`;

const Menu = styled.div`
  //border: 2px solid red;
  z-index: 10;
  cursor: pointer;
  color: ${props => props.flag?'white':'gray'};
  font-size: 16px;
  &:hover {
    transform: scale(1.15);
    transition: .2s;
  }
  @media ${device.tablet} {
    font-size: 22px;
  }
`;


export { SubWrapper, Menu };