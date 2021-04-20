import styled from 'styled-components';
import { Image } from 'antd';
import { device } from '../../styles/variables';

const DetailWrapper = styled.div`
  margin-top: 60px;
  border: 1px solid red;
  padding: 10px;
  @media ${device.tablet} {
    width: 750px;
    margin-top: 70px;
  }
`;
const Block = styled.div`
  border: 1px solid yellow;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-around;
  }

`;
const PosterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Poster = styled(Image)`
  width: 300px;
  height: 400px;
  border: 3px solid white;
  border-radius: 30px;
`;
const Detail = styled.div`
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
const Story = styled.div`

  border: 1px solid white;
`;


export { DetailWrapper,Block,Poster,Detail,Story,PosterWrapper };