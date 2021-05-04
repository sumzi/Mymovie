import styled from 'styled-components';
import { device } from '../../styles/variables';
import searchImg from '../../images/search.jpg'

const Wrapper = styled.div`
  background-image: url(${searchImg});
  background-size: cover;
  min-height: 100vh;
  position:relative;
  padding: 50px;
  background-color: black;
`;
const Header = styled.div`
  padding-top: 60px;
  @media ${device.tablet}{
    padding-top: 70px;
  }
  margin: 0 auto;
  @media ${device.tablet} {
    min-width: 700px;
    max-width: 900px;
  }
`;

const InputWrapper = styled.div`
  input {
    color: white;
    text-align: center;
    width: 100%;
    height: 50px;
    outline-style: none;
    font-size: 20px;
    border: 1px solid white;
    background-color: black;
  }
  margin-bottom: 10px;
`;
const IndexWrapper = styled.div`
  height: 400px;
  width: 100%;
  overflow-y: auto;
`;
export {Header, InputWrapper,Wrapper,IndexWrapper };