import { appApis } from './../../constants/configs';
import request from '../../utils/request';

const AuthServices = {
  regiterAccount() {
    return request.post(`${appApis.AUTH}/register`);
  },
  loginAccount(data: { email: string; password: string }) {
    return request.post(`${appApis.AUTH}/login`, data);
  },
};
export default AuthServices;
