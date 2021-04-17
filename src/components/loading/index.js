import React from 'react';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  text-align: center;
  padding-top: 30vh;
`;

function Loading() {
  return (
    <LoadingWrapper>
      <Spin size="large"/>
    </LoadingWrapper>
  )
}

export default Loading;
