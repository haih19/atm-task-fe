import { Form, Input, Checkbox, Button, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { login, resetIsLogged } from '../../../redux/features/login/loginSlice';
import { useEffect } from 'react';
import { IUserInfo } from '../../../common/types/auth.model';
import './styles.scss';
import './responsive.styles.scss';

const { Title } = Typography;

export const LoginForm: React.FC = () => {
   const [form] = Form.useForm();
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const { isLogged, token } = useAppSelector((state) => state.login);

   const onFinish = (value: IUserInfo) => {
      form.resetFields();
      dispatch(login(value));
   };

   useEffect(() => {
      if (isLogged) {
         localStorage.setItem('accessToken', token as string);
         navigate('/');
      }
      dispatch(resetIsLogged());
      // eslint-disable-line no-use-before-define
   }, [isLogged]);

   const onFinishFailed = (errorInfo: any) => {};
   return (
      <div>
         <div className="login-container">
            <Form
               style={{ justifyContent: 'center' }}
               name="normal_login"
               className="login-form"
               form={form}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
               initialValues={{
                  remember: true,
               }}>
               <Title className="login-title" level={3}>
                  Log In
               </Title>
               <Form.Item
                  name="email"
                  rules={[
                     {
                        // type: 'email',
                        required: true,
                        message: 'Please input your Email!',
                     },
                  ]}>
                  <Input placeholder="Email" />
               </Form.Item>
               <Form.Item
                  name="password"
                  rules={[
                     {
                        required: true,
                        message: 'Please input your password!',
                     },
                  ]}
                  hasFeedback>
                  <Input.Password placeholder="password" />
               </Form.Item>
               <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                     <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <a className="login-form-forgot">Forgot password</a>
               </Form.Item>
               <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                     Log in
                  </Button>
                  Or <Link to="/register">register now!</Link>
               </Form.Item>
            </Form>
         </div>
      </div>
   );
};
