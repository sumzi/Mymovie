import styled from 'styled-components';
import { device } from '../../../styles/variables';
import { IMAGE_BASE_URL } from '../../../Config';
const Poster = styled.div`
  height: 200px;
  width: 100%;
  @media ${device.tablet} {
    height: 260px;
  }
  z-index:10;
  background: ${({ Img }) => 
    Img ? `url(${IMAGE_BASE_URL}w500${Img}) center no-repeat` : 'gray'
  };
  background-size: cover;
  display: flex;
  justify-content: space-around;
`;


const CardWrapper = styled.div`
  background-color: white;
  border: 4px solid black;
  border-radius: 15px;
  height: 280px;
  padding: 15px;
  overflow: hidden;
  @media ${device.tablet} {
    height: 350px;
  }
  &:hover {
    box-shadow: 0 0 20px white;
  }
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
`;
const LikeButton = styled.div`
  font-size: 30px;
  @media ${device.tablet} {
    font-size: 40px;
  }
  cursor: pointer;
  .unlike {
    display: none;
  }
  &:hover {
    .like {
      display: none;
    }
    .unlike {
      display: block;
    }
  }
`;
const Title = styled.div` 
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: 17px;
  color: black;
  text-align: center;
  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export { CardWrapper, Poster, Detail, LikeButton, Title };