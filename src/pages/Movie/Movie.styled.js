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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  transition: .5s;
  opacity: 0.7;
`;

const MovieWrapper = styled.div`
  //border: 2px solid red;
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  top: 110px;
  padding: 20px;
  margin: 0 20px;
  overflow-y: scroll;

  div {
    height:100%;
  }

  @media ${device.tablet} {
    margin: 0 50px;
  }
`;


export { BackgroundImg, MovieWrapper };