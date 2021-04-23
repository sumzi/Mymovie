import styled from 'styled-components';
import { device } from '../../../styles/variables';
import { Image } from 'antd';

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 3px solid gray;
  @media ${device.tablet} {
    width: 750px;
    display: flex;
    justify-content: space-around;
    padding-bottom: 30px;
  }
  padding-bottom: 20px;
`;

const PosterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Poster = styled(Image)`
  display: flex;
  justify-content: space-around;
  width: 300px;
  height: 400px;
  border: 3px solid gray;
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
    display: flex;
    justify-content: space-around;
    @media ${device.tablet} {
      justify-content: space-between;
    }
  }

  .title {
    font-size: 30px;
    font-weight: bold;
  }
  .originalTitle .genres .rating {
    font-size: 17px;
  }
`;

const StoryWrapper = styled.div`
  padding: 20px 0;
  @media ${device.tablet} {
    padding: 30px 0;
  }

  label {
    font-weight: bold;
    font-size: 20px;
  }
  width: 100%;
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
const LikeButton = styled.div`
  div {
    font-size: 30px;
    display: inline;
    cursor: pointer;
    .hidden_like {
      display: none;
    }

    &:hover {
      .visible_like {
        display: none;
      }
      .hidden_like {
        display: inline;
      } 
    }
  }
  
`;

export { Wrapper,DetailWrapper,StoryWrapper,PosterWrapper,Poster,LikeButton };