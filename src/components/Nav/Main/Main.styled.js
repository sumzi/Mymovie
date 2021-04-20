import styled from 'styled-components';
import { device } from '../../../styles/variables';

const MainWrapper = styled.div`
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 0 30px;
  @media ${device.tablet} {
    padding: 0 50px;
    height: 70px;
    div {
      line-height: 70px;
    }
  }
  z-index: 30;
  width: 100%;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 60px;
`;
const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
  @media ${device.tablet} {
    width: 180px;
  }
  div {
    color: white;
    font-size: 27px;
    line-height: 60px;
    @media ${device.tablet} {
      font-size: 35px;
      line-height: 70px;
    }
  }
`;
const Logo = styled.div`
  width: 80px;
  @media ${device.tablet} {
    width: 120px;
  }
  img {
    width: 100%;
  }
  z-index: 21;
`;

export { MainWrapper, LeftWrapper, RightWrapper, Logo };