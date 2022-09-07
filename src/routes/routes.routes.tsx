import { RegisterPage } from '../pages/AuthPage/RegisterPage';
import { LoginPage } from '../pages/AuthPage/LoginPage';
import { routesPath } from './routes.path';
import { HomePage } from '../pages/HomePage';
import { RouteObject } from 'react-router-dom';
import { PrivateRoute } from './private.routes';

export const routes: RouteObject[] = [
   {
      path: '/',
      element: (
         <PrivateRoute>
            <HomePage />
         </PrivateRoute>
      ),
   },
   {
      path: routesPath.auth.PATH_REGISTER,
      element: <RegisterPage />,
   },
   {
      path: routesPath.auth.PATH_LOGIN,
      element: <LoginPage />,
   },
];
