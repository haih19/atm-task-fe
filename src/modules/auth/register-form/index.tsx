import { Form, Input, Button, Typography } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";
import "./responsive.styles.scss";

const { Title } = Typography;

export const RegisterForm = () => {
   const navigate = useNavigate();

   const onFinish = (value: { email: string; password: string; confirm: string }) => {
      try {
         axios
            .post("http://localhost:5001/api/v1/auth/register", value)
            .then((response) => {
               localStorage.setItem("registerToken", response.data.PRIVATE_TOKEN);

               response.data.registered
                  ? navigate("/login")
                  : alert("Email already existed");
            });
      } catch (e) {}
   };

   const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
   };

   return (
      <div className="register-container">
         <Form
            style={{ justifyContent: "center" }}
            name="normal_register"
            className="register-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{
               remember: true,
            }}>
            <Title className="register-title" level={3}>
               Sign Up
            </Title>
            <Form.Item
               name="email"
               rules={[
                  {
                     // type: 'email',
                     required: true,
                     message: "Please input your User email!",
                  },
               ]}>
               <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
               name="password"
               rules={[
                  {
                     required: true,
                     message: "Please input your password!",
                  },
               ]}
               hasFeedback>
               <Input.Password placeholder="password" />
            </Form.Item>
            <Form.Item
               name="confirm"
               dependencies={["password"]}
               hasFeedback
               rules={[
                  {
                     required: true,
                     message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                     validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                           return Promise.resolve();
                        }
                        return Promise.reject(
                           new Error("The two passwords that you entered do not match!")
                        );
                     },
                  }),
               ]}>
               <Input.Password placeholder="confirm password" />
            </Form.Item>
            <Form.Item>
               <Button type="primary" htmlType="submit" className="register-form-button">
                  Sign Up
               </Button>
               Or <Link to="/login">Login now!</Link>
            </Form.Item>
         </Form>
      </div>
   );
};
