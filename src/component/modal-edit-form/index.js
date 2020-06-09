import React, { Component } from "react";
import { Modal, Form, Input, Radio } from "antd";
import { connect } from "react-redux";

const ModalFrom = ({ visible, onCancel, onCreate, user }) => {
  const [form] = Form.useForm();
  const validateMessages = {
    types: {
      email: "${label} is not valid email!",
    },
  };
  console.log(user, "user");
  return (
    <Modal
      visible={visible}
      title="Edit User Page"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        validateMessages={validateMessages}
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please enter username",
            },
          ]}
        >
          <Input defaultValue={user.username} />
        </Form.Item>
        <Form.Item
          name={"email"}
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input defaultValue="ideal@mail.ru" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userLoginData,
  };
};

export default connect(mapStateToProps, null)(ModalFrom);
