import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { device } from '../../styles/variables';

const FooterWrapper = styled.div`
  height: 60px;
  line-height: 60px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  label {
    margin: 0 9px;
  }
  a{
    color: gray;
  }
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  @media ${device.tablet}{
    font-size: 17px;
    height: 100px;
    line-height: 100px;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <a href='https://github.com/sumzi/Movie'><GithubOutlined /> sumzi</a>
    </FooterWrapper>
  )
}

export default Footer;
