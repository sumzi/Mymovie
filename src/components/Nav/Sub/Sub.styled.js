import styled from 'styled-components';
import { device } from '../../../styles/variables';

const SubWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  height: 50px;
  width: 100%;
  line-height: 50px;
  @media ${device.tablet} {
    margin-top: 70px;
    padding: 0 100px;
    height: 50px;
    line-height: 50px;
  }
`;

const Menu = styled.div`
  z-index:10;
  cursor: pointer;
  color: ${props => props.flag?'white':'gray'};
  font-weight: bold;
  font-size: 19px;
  &:hover {
    transform: scale(1.15);
    transition: .2s;
  }
  @media ${device.tablet} {
    font-size: 28px;
  }
`;


export { SubWrapper, Menu };