import styled from 'styled-components';
import { device } from '../../../styles/variables';
import { Image } from 'antd';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  border: 1px solid red;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    width: 750px;
    margin-top: 70px;
    justify-content: space-around;
  }
`;
const PosterWrapper = styled.div`
  width: 100%;
  border: 1px solid red;
`;
const Poster = styled(Image)`

  display: flex;
  justify-content: space-around;
  width: 300px;
  height: 400px;
  border: 3px solid white;
  border-radius: 30px;
`;
const DetailWrapper = styled.div`
  @media ${device.tablet} {
    padding-left: 20px;
    padding-top: 20px;
    text-align: left;
  }
  width: 100%;
  padding-top: 20px;

  div {
    border: 1px solid white;
    display: flex;
    justify-content: space-around;
    @media ${device.tablet} {
      justify-content: space-between;
    }
  }

  div:nth-child(1) {
    font-size: 30px;
    font-weight: bold;
  }
  div:nth-child(2) {
    font-size: 17px;
  }
`;


const StoryWrapper = styled.div`
  label {
    font-weight: bold;
    font-size: 20px;
  }
  width: 100%;
  padding: 20px 30px;
  height: 100%; 
  border-bottom: 3px solid gray;
  
  .story {
    padding: 8px;
  }
  .tagline {
    font-size: 17px;
    margin: 5px 0;
    font-style: italic;
  }
  .overview {
    font-size: 16px;
  }
`;

export { Wrapper,DetailWrapper,StoryWrapper,PosterWrapper,Poster };