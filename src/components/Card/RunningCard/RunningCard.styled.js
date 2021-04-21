import styled from 'styled-components';
import { device } from '../../../styles/variables';

const CardWrapper = styled.div`
  height: 520px;
  margin: 0 auto;
  //border: 1px solid red;
  position: relative;
  padding: 30px;
  @media ${device.tablet} {
    padding: 20px;
    height: 480px;
  }
  img {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    box-shadow: 0px 10px 10px black;
    &:hover {
      transform: scale(1.1);   
      transition: 1s;
    }
  }
`;


export { CardWrapper };