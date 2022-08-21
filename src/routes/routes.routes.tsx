import { IRoute } from "../types/router.model";

import { RegisterLayout } from "../pages/auth/register";
import { LoginLayout } from "../pages/auth/login";

import { routesPath } from "./routes.path";

export const authRoute: IRoute[] = [
  {
    path: routesPath.auth.PATH_LOGIN,
    element: <LoginLayout />,
  },
  {
    path: routesPath.auth.PATH_REGISTER,
    element: <RegisterLayout />,
  },
];
