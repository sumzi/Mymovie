import styled from 'styled-components';
import { device } from '../../../styles/variables';

const CardWrapper = styled.div`
  border: 4px solid white;
  border-radius: 40px;
  display: flex;
  padding: 20px;
  @media ${device.tablet} {
    padding: 30px;
  }

`;
const Poster = styled.div`
  width: 120px;
  height: 180px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
  @media ${device.tablet} {
    width: 160px;
    height: 240px;
  }
  &:hover{
    opacity: 0.5;
  }
`;
const Detail = styled.div`
  margin-left: 20px;
  max-width: 180px;
  @media ${device.tablet} {
    margin-left: 30px;
  }
  .title {
    font-size: 22px;
    font-weight: bold;
  }
  .original_title,.release_date, .rating{
    font-size: 16px;
    padding-bottom: 5px;
  }
`;

export { CardWrapper, Poster, Detail };