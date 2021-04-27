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
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  @media ${device.tablet} {
    top: 70px;
  }
`;

const Detail = styled.div`
  position: absolute;
  width: 100%;
  bottom: 100px;
  text-shadow: 2px 2px 2px black;
  text-align: center;
  padding: 0 30px;

  p:nth-child(1) {
    font-style: italic;
    font-size: 25px;
  }
  p:nth-child(2) {    
    font-size: 20px;
  }

  @media ${device.tablet} {
    text-align: left;
    padding: 0 120px;
    width: 70%;
    p:nth-child(1) {
      font-size: 35px;
    }
    p:nth-child(2) {    
      font-size: 30px;
    }
  }
`;
const Wrapper = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
}
`;

const FooterWrapper = styled.div`
  height: 100px;
  line-height: 100px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  opacity: 0.4;
  font-size: 17px;
  label {
    margin: 0 9px;
  }
  a{
    color: white;
  }
`;

export { BackgroundImg, Detail, Wrapper, FooterWrapper };