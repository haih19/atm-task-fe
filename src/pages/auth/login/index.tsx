import { LoginForm } from '../../../modules/auth/login-form';
import './index.scss';

export const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-layout">
        <LoginForm />
      </div>
    </div>
  );
};
