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
  &:hover{
    box-shadow: 0 0 20px white;
    img {
      opacity: 0.5;
    }
  }
`;
const Poster = styled.div`
  div {
    background-color: gray;
    width: 120px;
    height: 180px;

    @media ${device.tablet} {
      width: 160px;
      height: 240px;
    }
  }
  img {
    width: 120px;
    height: 180px;

    @media ${device.tablet} {
      width: 160px;
      height: 240px;
    }
  }
`;
const Detail = styled.div`
  margin-left: 20px;
  max-width: 100%;
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

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  font-size: 20px;
  height: 50px;
  margin: 5px 0;
  padding: 0 20px;

  div{
    color: white;
    &:hover {
      color: red;
      transition: .3s;
    }
  }
`;

export { CardWrapper, Poster, Detail,Wrapper };