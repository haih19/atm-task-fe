import { Form, Input, Checkbox, Button, Row, Col, Typography } from 'antd';
import './styles.scss';

const { Title } = Typography;

export const RegisterForm = () => {
  return (
    <div className="register-container">
      <Title level={3}>Sign Up</Title>
      <Form
        style={{ justifyContent: 'center' }}
        name="normal_login"
        className="register-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="register-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-form-button">
            Sign Up
          </Button>
          Or <a href="">Login now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
