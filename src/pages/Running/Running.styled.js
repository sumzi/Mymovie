import styled from 'styled-components';
import { device } from '../../styles/variables';

const BackgroundImg = styled.div`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0.25) 85%,
    rgba(0, 0, 0, 0.5) 90%,
    rgba(0, 0, 0, 0.75) 95%,
    rgba(0, 0, 0, 1) 100%
  ),linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.25) 70%,
    rgba(0, 0, 0, 0.5) 80%,
    rgba(0, 0, 0, 0.75) 90%,
    rgba(0, 0, 0, 1) 100%
  ), ${({ bgPath }) => `url(${bgPath}) center no-repeat`}; 
  background-size: cover;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .5s;
  opacity: 0.5;
  @media ${device.tablet} {
    top: 70px;
  }
`;

const MovieWrapper = styled.div`
  //border: 10px solid red;
  padding-top:60px;
  padding: 0 20px;
  margin: 0 20px;
  margin-bottom: 50px;
  @media ${device.tablet} {
    max-width: 1200px;
    margin-bottom: 50px;
  }
`;
const Wrapper = styled.div`
  margin-top: 60px;
  //border: 10px solid blue;
  min-height: 100%;
  position: relative;

  @media ${device.tablet} {
    margin-top: 70px;
    padding: 20px 40px;
    display: flex;
    justify-content: space-around;
  }
`;

export { BackgroundImg, MovieWrapper, Wrapper };