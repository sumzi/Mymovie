import styled from 'styled-components';
import { device } from '../../styles/variables';
const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  
`;

const Head = styled.div`
  height: 100vh;
  color: white;
  overflow: hidden;
  @media ${device.tablet} {
  }
`;

const Background = styled.div`
  position: relative;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.25) 70%,
    rgba(0, 0, 0, 0.5) 80%,
    rgba(0, 0, 0, 0.75) 90%,
    rgba(0, 0, 0, 1) 100%
  ),linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.25) 70%,
    rgba(0, 0, 0, 0.5) 80%,
    rgba(0, 0, 0, 0.75) 90%,
    rgba(0, 0, 0, 1) 100%
  ), ${({ bgPath }) => `url(${bgPath}) center no-repeat`};  
  background-size: cover;
  height: 100vh;
  padding-top: 60px;
  @media ${device.tablet} {
    padding-top: 70px;
  }
`; 

const Detail = styled.div`
  position: absolute;
  left:0;
  right:0;
  bottom: 100px;
  text-shadow: 2px 2px 2px black;
  color: white;
  text-align: center;
  .title {
    font-size: 20px;
    color: white;
  }
  .original_title{
    color: white;
    font-size: 17px;
    margin-top: 10px;
  }
  @media ${device.tablet} {
    left: 150px;
    bottom: 150px;
    text-align: left;
    .title {
      font-size: 40px;
      font-weight: bold;
    }
    .original_title{
      font-size: 20px;
      margin-top: 10px;
    }
  }
`;

const Description = styled.div`
  padding: 100px 30px;
  color: gray;
  text-align: center;
  font-size: 15px;
`;
const Footer = styled.div`
  padding: 50px;
  text-align: center;
  font-size: 17px;
  label {
    margin: 0 9px;
  }
  a{
    color: gray;
  }
`;
export {  Detail, Wrapper,Description, Footer, Head, Background };