import styled from 'styled-components';
import { device } from '../../../styles/variables';

const CastsWrapper = styled.div`
  label {
    font-weight: bold;
    font-size: 20px;
  }
  padding: 20px 0;
  width: 100%;
  height: 100%; 
  border-bottom: 3px solid gray;
  @media ${device.tablet} {
    padding: 30px 0;
  }
`;

const CastWrapper = styled.div`
  height: 100%;
  
  padding: 8px;
  img {
    width: 100%;
    border-radius: 20px;
  }
  .name {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
  .role {
    text-align: center;
  }
  
`;
export {CastsWrapper,CastWrapper};