import styled from 'styled-components';
import { device } from '../../../styles/variables';

const SubWrapper = styled.div`
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  padding: 0 10px;
  margin-bottom: 30px;
  @media ${device.tablet} {
    margin-bottom: 50px;
    justify-content: space-evenly;
  }
`;

const Menu = styled.div`
  z-index: 10;
  cursor: pointer;
  color: ${props => props.flag?'#FF0000':'gray'};
  border-bottom: ${props => props.flag?'3px solid #FF0000':'none'};
  font-weight: bold;
  font-size: 15px;
  &:hover {
    //transform: scale(1.15);
    transition: .3s;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
`;


export { SubWrapper, Menu };