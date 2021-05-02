import React from "react";
import { Link } from "react-router-dom";
import { RightWrapper,IconWrapper } from "./Main.styled";
import {
  VideoCameraOutlined,
  HeartOutlined,
  SearchOutlined,
  MoreOutlined,
  MenuOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Switch, Dropdown, Menu } from 'antd';

function Right() {
  
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  const clickIcon = () => {

  }
  const menu = (
    <Menu>
      <Menu.Item>
        Dark mode <Switch defaultChecked onChange={onChange} />
      </Menu.Item>
    </Menu>
  )
  return (
    <RightWrapper>
      <div className="pc">
        <Link to="/running">
          <IconWrapper>
            <VideoCameraOutlined />
          </IconWrapper>
        </Link>
        <Link to="/like">
          <IconWrapper>
            <HeartOutlined />
          </IconWrapper>
        </Link>
        <Link to="/search">
          <IconWrapper>
            <SearchOutlined />
          </IconWrapper>
        </Link>
        <IconWrapper onClick={clickIcon}>
          <Dropdown overlay={menu} placement="bottomRight">
            <MoreOutlined />
          </Dropdown>
        </IconWrapper>

      </div>
      <div className="mobile">
        <IconWrapper>
          <MenuOutlined style={{ color: "black" }}/>
        </IconWrapper>
      </div>
    </RightWrapper>
  );
}

export default Right;
