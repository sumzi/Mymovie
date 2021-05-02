import styled from 'styled-components';
import { device } from '../../../styles/variables';

const MainWrapper = styled.div`
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 0 30px;
  @media ${device.tablet} {
    padding: 0 100px;
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
  .pc {
    display: none;
    @media ${device.tablet} {
      display: flex;
      justify-content: space-between;
      width: 210px;
      font-size: 35px;
      line-height: 70px;
    }
  }
  .mobile {
    display: block;
    font-size: 24px;
    line-height: 60px;
    @media ${device.tablet} {
      display: none;
    }
  }
`;
const Logo = styled.div`
  width: 80px;
  @media ${device.tablet} {
    width: 140px;
  }
  img {
    width: 100%;
  }
  z-index: 21;
`;

const IconWrapper = styled.div`
  color: black;
`;

export { MainWrapper, LeftWrapper, RightWrapper, Logo,IconWrapper };