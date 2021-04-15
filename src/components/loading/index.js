import React from 'react';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  margin: 0 auto;
  padding-top: 150px;
  text-align: center;
`;

function Loading() {
  return (
    <LoadingWrapper>
      <Spin size="large"/>
    </LoadingWrapper>
  )
}

export default Loading;
