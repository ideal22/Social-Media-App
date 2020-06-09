import React, { Component } from "react";
import { Card, Avatar } from "antd";
import "./profile.css";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import Followers from "../followers";
import Following from "../following";
import Posts from "../posts";
import ModalFrom from "../modal-edit-form";

class Profile extends Component {
  state = {
    noTitleKey: "posts",
    visible: false,
  };

  onTabChange = (key) => {
    console.log(key);
    this.setState({ noTitleKey: key });
  };

  onCreate = (values) => {
    console.log(values, "edit values");
    this.setState({ visible: false });
  };

  onCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { user } = this.props;
    const { visible } = this.state;
    const tabListNoTitle = [
      {
        key: "posts",
        tab: "Posts",
      },
      {
        key: "following",
        tab: "Following",
      },
      {
        key: "followers",
        tab: "Followers",
      },
    ];
    const contentListNoTitle = {
      posts: <Posts />,
      following: <Following />,
      followers: <Followers />,
    };
    const title = (
      <div className="card-title">
        <Avatar size={64} icon={<UserOutlined />} />
        <h3 style={{ marginLeft: 20 }}>{user.username}</h3>
        <EditOutlined
          onClick={() => this.setState({ visible: true })}
          style={{ fontSize: 20, marginLeft: 40, color: "#eb2f96" }}
        />
      </div>
    );
    return (
      <div>
        <h1 className="profile-title">Profile</h1>
        <div className="site-card-border-less-wrapper">
          <Card
            title={title}
            hoverable={true}
            loading={false}
            extra={<a href="#">More</a>}
            tabList={tabListNoTitle}
            activeTabKey={this.state.noTitleKey}
            onTabChange={(key) => {
              this.onTabChange(key);
            }}
            bordered={true}
            style={{ width: "100%", height: "500px" }}
          >
            {contentListNoTitle[this.state.noTitleKey]}
          </Card>
        </div>
        <ModalFrom
          visible={visible}
          onCreate={this.onCreate}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userLoginData,
  };
};

export default connect(mapStateToProps, null)(Profile);
