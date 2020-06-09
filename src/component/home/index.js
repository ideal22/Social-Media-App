import React, { Component } from "react";
import { Layout, Breadcrumb, Menu, Row, Col, Dropdown } from "antd";
import {
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./home.css";
import { connect } from "react-redux";
import { setIsLoggedIn } from "../../redux/action";
import { Switch, Route, Link } from "react-router-dom";
import Profile from "../profile";
import Settings from "../settings";

class Home extends Component {
  LogOut = () => {
    this.props.setIsLoggedIn(false);
  };
  render() {
    const { user } = this.props;
    const menu = (
      <Menu>
        <Menu.Item icon={<UserOutlined />}>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item icon={<SettingOutlined />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
        <Menu.Item danger icon={<LogoutOutlined />} onClick={this.LogOut}>
          Log Out
        </Menu.Item>
      </Menu>
    );
    const { Header, Content, Footer } = Layout;
    return (
      <Row justify="center" align="middle" className="homeWrapper">
        <Col span={16}>
          <Layout className="layout">
            <Header>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item>
                  <span>{user && user.username}</span>
                </Menu.Item>
                <Dropdown overlay={menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Dashboard <DownOutlined />
                  </a>
                </Dropdown>
              </Menu>
            </Header>
            <Content style={{ padding: "0 50px" }}>
              <div className="site-layout-content">
                <Switch>
                  <Route path="/profile" component={Profile} />
                  <Route path="/settings" component={Settings} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIsLoggedIn: (value) => dispatch(setIsLoggedIn(value)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.userLoginData,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
