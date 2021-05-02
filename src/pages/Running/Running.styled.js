import styled from 'styled-components';
import { device } from '../../styles/variables';

const MovieWrapper = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  margin-bottom: 50px;
  padding: 0 30px;
  @media ${device.tablet} {
    max-width: 1200px;
    margin-bottom: 50px;
    padding: 50px 100px;
  }
`;
const Wrapper = styled.div`
  margin-top: 60px;
  min-height: 100%;
  @media ${device.tablet} {
    margin-top: 70px;
  }
`;
const Header = styled.div`
  @media ${device.tablet} {
    height: 500px;
    background: ${({ bgPath }) => `url(${bgPath}) center no-repeat`};
    background-size: cover;
    transition: 1s;
    position: relative;
  }
`;
const Detail = styled.div`
  color: white;
  position: absolute;
  left: 80px;
  bottom: 80px;
`;

export { MovieWrapper, Wrapper, Header,Detail };