import styled from 'styled-components';
import { device } from '../../styles/variables';

const Wrapper = styled.div`
  min-height: 100vh;
  position:relative;
  padding-bottom: 100px;
`;
const SearchWrapper = styled.div`
  padding-top: 60px;
  width: 100%;
  @media ${device.tablet}{
    padding-top: 70px;
  }
`;
const Header = styled.div`
  padding-top: 10px;
  text-align: center;
  div {
    font-size: 24px;
    padding: 5px;
  }
`;
const Section = styled.div`
  margin: 0 auto;
  width: 85%;
  padding: 20px 0;
  @media ${device.tablet} {
    padding: 40px 0;
    max-width: 1200px;
    min-width: 768px;
  }

`;
const InputWrapper = styled.div`
  text-align: center;
  input{
    background-color: #D9D9D9;
    outline:none;
    height:40px;
    border-radius: 22px;
    width: 200px; 
    padding: 0 18px; 
    color: black;
    font-size: 20px;
    @media ${device.tablet} {
      width: 300px;
    }
  }
`;
export { SearchWrapper, Header, Section, InputWrapper,Wrapper };