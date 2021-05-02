import styled from 'styled-components';

const CardWrapper = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    mix-blend-mode: normal;
    &:hover {
      transition: .8s;
      mix-blend-mode: luminosity;
    }
  }

`;


export { CardWrapper };