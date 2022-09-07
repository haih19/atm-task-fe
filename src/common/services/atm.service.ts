import { APP_APIS } from '../constants/configs';
import { headers } from '../constants/authConfigs';
import request from '../utils/request';
import { IAddPostAtm, IDeleteAtmRes, IParamsAddTrans, IResGetAtm } from '../types/atm.model';

const AtmServices = {
   getAllAtms(): Promise<IResGetAtm> {
      return request.get(`${APP_APIS.ATMS}`, { headers });
   },
   addAAtm(name: string): Promise<IAddPostAtm> {
      return request.post(`${APP_APIS.ATMS}`, { name }, { headers });
   },
   addATransaction(trans: IParamsAddTrans): Promise<IParamsAddTrans> {
      return request.post(`${APP_APIS.ATMS}/people`, { trans }, { headers });
   },
   deleteAtm(id: string): Promise<IDeleteAtmRes> {
      return request.delete(`${APP_APIS.ATMS}/${id}`, { headers });
   },
};

export default AtmServices;
