import styled from 'styled-components';
import { device } from '../../styles/variables';

const AboutWrapper = styled.div`
  margin-left: auto;
  width: 100%;
  padding: 20px 30px;
  margin-top: 60px;
  @media ${device.tablet} {
    width: 780px;
    margin-top: 70px; 
    padding: 30px 80px;
  }
`;

const BackgroundImg = styled.div`
  display: none;
  z-index:-1;
  @media ${device.tablet}{
    display: block;
    border: 2px soid blue;
    width: 55%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0.25) 45%,
      rgba(0, 0, 0, 0.5) 60%,
      rgba(0, 0, 0, 0.75) 85%,
      rgba(0, 0, 0, 1) 100%
    ),linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 0.25) 85%,
      rgba(0, 0, 0, 0.5) 90%,
      rgba(0, 0, 0, 0.75) 95%,
      rgba(0, 0, 0, 1) 100%
    ), ${({ bgPath }) => `url(${bgPath}) center no-repeat`}; 
    background-size: cover;
    position: fixed;
    top: 70px;
    left: 0;
    bottom: 0;
  }
`;
const Wrapper = styled.div`
  min-height: 100%;
  position:relative;
  padding-bottom: 100px;
`;

export { AboutWrapper, BackgroundImg, Wrapper };