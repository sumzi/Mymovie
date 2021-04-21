import styled from 'styled-components';
import { device } from '../../../styles/variables';

const VideosWrapper = styled.div`
  label {
    font-weight: bold;
    font-size: 20px;
  }
  width: 100%;
  height: 100%;
  padding: 20px 0;
  border-bottom: 3px solid gray;
  
  @media ${device.tablet} {
    padding: 30px 0;
  }
`;

const VideoWrapper = styled.div`
  height: 100%;
  padding: 8px;
`;
export {VideosWrapper,VideoWrapper};