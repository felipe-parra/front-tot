import React from "react";
import { Form, Input, Button, Icon, Row, Col } from "antd";

const Register = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <Row>
      <Col span={12} offset={6}>
        col-12 col-offset-6
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            <Input prefix={<Icon type="user"></Icon>} placeholder="username" />
          </Form.Item>
          <Form.Item>
            <Input prefix={<Icon type="lock"></Icon>} placeholder="password" />
          </Form.Item>
          <Button htmlType="submit" className="login-form-button">
            Register
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
