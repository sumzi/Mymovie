import React from 'react';
import { Empty } from 'antd';
import styled from 'styled-components';
const Wrapper = styled.div`
  padding-top: 30vh;
`;

function Nodata() {
  return (
    <Wrapper>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </Wrapper>
  )
}

export default Nodata;