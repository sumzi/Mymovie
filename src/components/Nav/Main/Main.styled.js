import styled from 'styled-components';
import { device } from '../../../styles/variables';

const MainWrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 0 20px;
  @media ${device.tablet} {
    padding: 0 50px;
  }
  //border: 1px solid red;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  //border: 2px solid blue;
  line-height: 60px;
`;
const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  //border: 2px solid red;
  width: 120px;
  @media ${device.tablet} {
    width: 140px;
  }
  div {
    color: white;
    font-size: 25px;
    line-height: 60px;
    @media ${device.tablet} {
      font-size: 30px;
    }
    //border: 2px solid blue;
  }
  z-index: 20;
`;
const Logo = styled.div`
  width: 70px;
  @media ${device.tablet} {
    width: 100px;
  }
  img {
    width: 100%;
  }
  z-index: 21;
`;

export { MainWrapper, LeftWrapper, RightWrapper, Logo };