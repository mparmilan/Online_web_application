import React, { useState } from "react";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const RegisterScreen = () => {
  const navigate = useNavigate();

  // Register Here
  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/register",
        values
      );
      console.log("Registration successful:", response.data);
      navigate("/login");
      toast.success("User Registration successfully");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="max-w-screen-lg px-4 py-16 sm:px-6 lg:px-4 w-[500px] mx-auto font-poppins">
      <Form
        name="normal_login"
        className="login-form bg-white rounded p-5"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h1 className="text-center py-4 font-acme text-xl">Register Here!</h1>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon py-2" />}
            placeholder="Username"
            id="username"
            name="username"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon py-2" />}
            placeholder="Email Address"
            id="email"
            name="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon py-2" />}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button mr-2 w-full text-base flex items-center justify-center font-poppins"
          >
            Register Now
          </Button>
        </Form.Item>
        <Form.Item>
          <p className="text-center py-2 mx-3 text-base font-poppins">
            Already registered?
            <Link to="/login" className="text-sky-500 ml-2">
              Login account
            </Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};
export default RegisterScreen;
