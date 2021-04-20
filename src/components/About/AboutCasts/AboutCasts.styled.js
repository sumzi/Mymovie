import styled from 'styled-components';

const CastsWrapper = styled.div`
  label {
    font-weight: bold;
    font-size: 20px;
  }
  //border: 1px solid yellow;
  width: 100%;
  padding: 20px 30px;
  height: 100%; 
  border-bottom: 3px solid gray;
`;

const CastWrapper = styled.div`
  //border: 1px solid red;
  height: 100%;
  
  padding: 8px;
  img {
    width: 100%;
    border-radius: 20px;
    //border:1px solid snow;
  }
  .name {
    text-align: center;
    //border: 1px solid white;
    font-size: 16px;
    font-weight: bold;
  }
  .role {
    text-align: center;
    //border: 1px solid white;
  }
  
`;
export {CastsWrapper,CastWrapper};