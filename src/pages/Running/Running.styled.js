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
  opacity: 0.6;
  @media ${device.tablet} {
    top: 70px;
  }
`;

const MovieWrapper = styled.div`
  padding: 20px;
  margin: 0 20px;
  @media ${device.tablet} {
    margin: 0 50px;
  }
`;
const Wrapper = styled.div`
  min-height: 100%;
  position:relative;
  padding-bottom: 100px;
`;

export { BackgroundImg, MovieWrapper, Wrapper };