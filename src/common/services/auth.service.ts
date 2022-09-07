import { IRegiterReponse, ILoginReponse } from '../types/auth.model';
import { appApis } from '../constants/configs';
import request from '../utils/request';
import { IUserInfo } from '../types/auth.model';

const AuthServices = {
   registerAccount(params: IUserInfo): Promise<IRegiterReponse> {
      return request.post(`${appApis.AUTH}/register`, params);
   },
   loginAccount(params: IUserInfo): Promise<ILoginReponse> {
      return request.post(`${appApis.AUTH}/login`, params);
   },
};
export default AuthServices;
