import styled from 'styled-components';
import { device } from '../../styles/variables';

const LikeWrapper = styled.div`
  padding-top: 60px;
  @media ${device.tablet}{
    padding-top: 70px;
  }
`;
const Header = styled.div`
  background-color: #D9D9D9;
  dispaly: relative;
  padding: 30px 0;
  text-align: center;
  font-size: 17px;
  
  @media ${device.tablet}{
    padding: 50px 0;
    font-size: 24px;
  }
  .first {
    color: red;
    font-weight: bold;
  }
  .second {
    color: black;
    font-size: 17px;
  }
`;
const Section = styled.div`
  padding: 30px;
  margin: 0 auto;
  @media ${device.tablet} {
    padding: 50px 100px;
    max-width: 1200px;
  }
`;
const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
`;

export { LikeWrapper, Header, Section,Wrapper };