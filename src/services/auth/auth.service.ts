import { appApis } from './../../constants/configs';
import request from '../../utils/request';
import { IUserInfo } from '../../types/auth.model';

const AuthServices = {
   async regiterAccount(params: IUserInfo): Promise<IUserInfo> {
      const { data } = await request.post(`${appApis.AUTH}/register`, params);
      return data;
   },
   loginAccount(data: { email: string; password: string }) {
      return request.post(`${appApis.AUTH}/login`, data);
   },
};
export default AuthServices;
