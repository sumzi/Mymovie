import styled from 'styled-components';
import { device } from '../../styles/variables';

const LikeWrapper = styled.div`
  padding-top: 60px;
  @media ${device.tablet}{
    padding-top: 70px;
  }
  
`;
const Header = styled.div`
  text-align: center;
  font-size: 24px;
  padding: 10px;

`;
const Section = styled.div`
  padding: 30px;
  margin: 0 auto;
  @media ${device.tablet} {
    padding: 40px 0;
    width: 80%;
  }
`;
const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
`;

export { LikeWrapper, Header, Section,Wrapper };