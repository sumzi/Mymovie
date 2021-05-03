import styled from 'styled-components';

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

export { Wrapper };