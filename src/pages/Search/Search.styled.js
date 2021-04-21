import styled from 'styled-components';
import { device } from '../../styles/variables';

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
  padding: 30px 0;
  margin: 0 auto;
  width: 85%;
  @media ${device.tablet} {
    padding: 40px 0;
    width: 80%;
  }

`;
const InputWrapper = styled.div`
  text-align: center;
  input{
    border:none;
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
export { SearchWrapper, Header, Section, InputWrapper };