import React, { Component } from "react";
import { Row, Col, Button, Form, Input } from "antd";
import { connect } from "react-redux";
import { setRegisteredData } from "../../redux/action";
import { Link } from "react-router-dom";

class Register extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
    this.props.setRegisteredData(values);
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

    const validateMessages = {
      types: {
        email: "${label} is not valid email!",
      },
    };
    return (
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Col span={20}>
          <span className="title">Register</span>

          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            validateMessages={validateMessages}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Link to="/login">
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Link>
          </Form>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userRegisterdData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRegisteredData: (data) => dispatch(setRegisteredData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
