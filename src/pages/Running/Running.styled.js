import styled from 'styled-components';
import { device } from '../../styles/variables';

const BackgroundImg = styled.div`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.25) 70%,
    rgba(0, 0, 0, 0.5) 80%,
    rgba(0, 0, 0, 0.75) 90%,
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
  opacity: 0.6;
  @media ${device.tablet} {
    top: 70px;
  }
`;

const MovieWrapper = styled.div`
  //border: 2px solid red;
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  top: 100px;
  padding: 20px;
  margin: 0 20px;
  @media ${device.tablet} {
    margin: 0 50px;
  }
`;


export { BackgroundImg, MovieWrapper };