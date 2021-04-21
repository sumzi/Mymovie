import styled from 'styled-components';
import { device } from '../../styles/variables';

const LikeWrapper = styled.div`
  padding-top: 60px;
  @media ${device.tablet} {
    padding-top: 70px;
  }
  border: 1px solid red;
`;
export { LikeWrapper };