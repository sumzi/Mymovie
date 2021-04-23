import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  height: 100px;
  line-height: 100px;
  width: 100%;
  text-align: center;
  opacity: 0.4;
  font-size: 17px;
  label {
    margin: 0 9px;
  }
  a{
    color: white;
  }
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

function Footer() {
  return (
    <FooterWrapper>
      <a href='https://github.com/sumzi/Movie'><GithubOutlined /></a>
      <label>sumzi</label>
    </FooterWrapper>
  )
}

export default Footer;
