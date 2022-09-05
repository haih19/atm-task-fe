import { Navigate } from 'react-router-dom';
import { routesPath } from './routes.path';

export interface IPrivateRoute {
   children: JSX.Element;
}

export const PrivateRoute = ({ children }: IPrivateRoute): any => {
   const accessToken = Boolean(localStorage.getItem('accessToken'));
   return accessToken ? children : <Navigate to={routesPath.auth.PATH_LOGIN} replace />;
};
