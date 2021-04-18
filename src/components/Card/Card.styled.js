import styled from 'styled-components';
import { device } from '../../styles/variables';

const CardWrapper = styled.div`
  position: relative;
  padding: 0 30px;
  @media ${device.tablet} {
    padding: 20px;
  }
  img {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    box-shadow: 0px 5px 5px black;
    &:hover {
      transform: scale(1.1);   
      transition: 1s;
    }
  }
`;


export { CardWrapper };