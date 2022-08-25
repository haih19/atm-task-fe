import { RegisterPage } from "../pages/auth/register";
import { LoginPage } from "../pages/auth/login";

import { routesPath } from "./routes.path";
import { HomePage } from "../pages/home";
import { RouteObject } from "react-router-dom";
import { PrivateRoute } from "./private.routes";

export const routes: RouteObject[] = [
   {
      path: "/",
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

// export const privateRoute: RouteObject[] = [
//    {
//       path: routesPath.home.PATH_HOME,
//       element: <HomePage />,
//    },
// ];

// export const renderedRoute = (): { path: string; element: JSX.Element }[] => {
//    const accessToken = Boolean(localStorage.getItem('accessToken'));
//    if (accessToken) {
//       return privateRoute;
//    } else {
//       return authRoute;
//    }
// };
