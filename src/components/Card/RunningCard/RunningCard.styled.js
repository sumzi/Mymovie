import styled from 'styled-components';

const CardWrapper = styled.div`
  padding: 20px;
  img {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    &:hover {
      transform: scale(1.1);   
      transition: .8s;
      box-shadow: 0 0 20px white;
    }
  }

`;


export { CardWrapper };