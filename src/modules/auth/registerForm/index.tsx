import { Form, Input, Button, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { register, resetIsRegisteredState } from '../../../redux/features/regiter/registerSlice';
import { RootState } from '../../../redux/app/store';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { IUserInfo } from '../../../common/types/auth.model';
import './styles.scss';
import './responsive.styles.scss';

const { Title } = Typography;

export const RegisterForm = () => {
   const [form] = Form.useForm();
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   let { isRegistered } = useAppSelector((globalState: RootState) => globalState.register);

   const onFinish = (value: IUserInfo) => {
      delete value.confirm;
      form.resetFields();
      dispatch(register(value));
   };

   useEffect(() => {
      isRegistered && navigate('/login');
      dispatch(resetIsRegisteredState());
      // eslint-disable-line no-use-before-define
   }, [isRegistered]);

   return (
      <div className="register-container">
         <Form
            form={form}
            style={{ justifyContent: 'center' }}
            name="normal_register"
            className="register-form"
            onFinish={onFinish}
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
                     message: 'Please input your User email!',
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
            <Form.Item
               name="confirm"
               dependencies={['password']}
               hasFeedback
               rules={[
                  {
                     required: true,
                     message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                     validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                           return Promise.resolve();
                        }
                        return Promise.reject(
                           new Error('The two passwords that you entered do not match!')
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
