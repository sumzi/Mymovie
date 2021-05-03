import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RightWrapper, IconWrapper, DrawerMenu } from "./Main.styled";
import {
  VideoCameraOutlined,
  HeartOutlined,
  SearchOutlined,
  MoreOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Switch, Dropdown, Menu, Drawer } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_MODE_REQUEST } from "../../../store/reducers/home";

function Right({ mode }) {
  const dispatch = useDispatch();
  const { darkMode, changeModeLoading } = useSelector((state) => state.home);
  function onChange(checked) {
    const tmp = checked?0:1;
    dispatch({
      type: CHANGE_MODE_REQUEST,
      data: tmp,
    });
  }

  const menu = (
    <Menu>
      <Menu.Item>
        Dark mode{" "}
        <Switch
          checked={darkMode}
          onChange={onChange}
          loading={changeModeLoading}
        />
      </Menu.Item>
    </Menu>
  );

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

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
      <div className="mobile" onClick={showDrawer}>
        <IconWrapper mode={mode}>
          <MenuOutlined />
        </IconWrapper>
      </div>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ padding: 0, paddingTop: "100px", textAlign: "center" }}
      >
        <Link to="/running">
          <DrawerMenu onClick={onClose}>
            <label>Moive</label>
          </DrawerMenu>
        </Link>
        <Link to="/like">
          <DrawerMenu onClick={onClose}>
            <label>Like</label>
          </DrawerMenu>
        </Link>
        <Link to="/search">
          <DrawerMenu onClick={onClose}>
            <label>Seacrh</label>
          </DrawerMenu>
        </Link>
        <DrawerMenu>
          <Switch
            checked={darkMode}
            onChange={onChange}
            loading={changeModeLoading}
          />
        </DrawerMenu>
      </Drawer>
    </RightWrapper>
  );
}

export default Right;
