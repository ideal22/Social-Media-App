import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Col, Row } from "antd";
import "./login.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLoginData, setIsLoggedIn } from "../../redux/action";

class Login extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
    this.props.setLoginData(values);
    this.props.setIsLoggedIn(true);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 8 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    return (
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Col span={20}>
          <span className="title">Login</span>

          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              {/* <Link to="/register"> */}
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              {/* </Link> */}
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginData: (data) => dispatch(setLoginData(data)),
    setIsLoggedIn: (value) => dispatch(setIsLoggedIn(value)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
