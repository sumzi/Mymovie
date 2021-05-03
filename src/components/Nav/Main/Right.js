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
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_MODE_REQUEST } from "../../../store/reducers/home";

function Right({mode}) {
  const dispatch = useDispatch();
  const { darkMode, changeModeLoading } = useSelector(state => state.home);
  function onChange(checked) {
    dispatch({
      type: CHANGE_MODE_REQUEST,
      data: checked
    });
  }

  const menu = (
    <Menu>
      <Menu.Item>
        Dark mode <Switch Checked={darkMode} onChange={onChange} loading={changeModeLoading} />
      </Menu.Item>
    </Menu>
  )
  return (
    <RightWrapper>
      <div className="pc">
        <Link to="/running">
          <IconWrapper mode={mode}>
            <VideoCameraOutlined />
          </IconWrapper>
        </Link>
        <Link to="/like">
          <IconWrapper mode={mode}>
            <HeartOutlined />
          </IconWrapper>
        </Link>
        <Link to="/search">
          <IconWrapper mode={mode}>
            <SearchOutlined />
          </IconWrapper>
        </Link>
        <IconWrapper mode={mode}>
          <Dropdown overlay={menu} placement="bottomRight">
            <MoreOutlined />
          </Dropdown>
        </IconWrapper>

      </div>
      <div className="mobile">
        <IconWrapper mode={mode}>
          <MenuOutlined/>
        </IconWrapper>
      </div>
    </RightWrapper>
  );
}

export default Right;
