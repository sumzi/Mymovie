import styled from 'styled-components';

const MovieWrapper = styled.div`
  //border: 2px solid red;
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  top: 100px;
  padding: 20px;
  margin: 20px;
  div {
    height:100%;
  }
  overflow-y: scroll;
`;

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
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-size: cover;
  height: 100vh-60px;
  color: white;
`;




export { BackgroundImg, MovieWrapper };