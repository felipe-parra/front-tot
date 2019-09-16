import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

class Nav extends React.Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <Link to="/dashboard">
            <Icon type="unordered-list" />
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="register">
          <Link to="/register">
            <Icon type="user-add" /> Register
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;
