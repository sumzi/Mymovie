import styled from 'styled-components';

const MainWrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: black;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-around;
  line-height: 60px;

  a img {
    width: 100px;
    vertical-align: middle;
    margin: 0 30px;
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: space-around;
  line-height: 60px;

  a {
    display: inline-block;
    margin-right: 30px;
    font-size: 25px;
  }
  
`;
export { MainWrapper, Left, Right};