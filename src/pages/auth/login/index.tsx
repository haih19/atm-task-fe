import { LoginForm } from '../../../modules/auth/login-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './styles.scss';

export const LoginPage = () => {
   const navigate = useNavigate();
   useEffect(() => {
      if (localStorage.getItem('accessToken')) {
         navigate('/');
      } else {
         navigate('/login');
      }
   }, []);
   return (
      <div className="login">
         <div className="login-layout">
            <LoginForm />
         </div>
      </div>
   );
};
