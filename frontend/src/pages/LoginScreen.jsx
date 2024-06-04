import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const LoginScreen = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/login",
        values
      );
      navigate("/shop");
      console.log("Login successful:", response.data);
      toast.success("User Login successfully");
    } catch (error) {
      console.error("Login failed:", error);
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
        <h1 className="text-center py-4 font-acme text-xl">Login Here!</h1>
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
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button mr-2 w-full"
          >
            Login Now
          </Button>
        </Form.Item>
        <Form.Item>
          <p className="text-center py-2 mx-3 text-base font-poppins">
            Create an account
            <Link to="/register" className="text-sky-500 ml-2">
              <Link to="/register">register now!</Link>
            </Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginScreen;
