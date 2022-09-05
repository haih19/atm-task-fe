import { Navigate } from 'react-router-dom';
import { routesPath } from './routes.path';

export interface IPrivateRoute {
   children: JSX.Element;
}

export const PrivateRoute = ({ children }: IPrivateRoute): any => {
   const accessToken = Boolean(localStorage.getItem('accessToken'));
   return !accessToken ? <Navigate to={routesPath.auth.PATH_LOGIN} replace /> : children;
};

// export const ProtectedRoute = ({ children }: IPrivateRoute) => {
//    let location = useLocation();
//    if (!localStorage.getItem('accessToken')) {
//       return <Navigate to={routesPath.auth.PATH_LOGIN} replace />;
//    }
//    return children;
// };
