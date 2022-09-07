import { appApis, headers } from '../constants/configs';
import request from '../utils/request';
import { IAddPostAtm, IDeleteAtmRes, IParamsAddTrans, IResGetAtm } from '../types/atm.model';

const AtmServices = {
   getAllAtms(): Promise<IResGetAtm> {
      return request.get(`${appApis.ATMS}`, { headers });
   },
   addAAtm(name: string): Promise<IAddPostAtm> {
      return request.post(`${appApis.ATMS}`, { name }, { headers });
   },
   addATransaction(trans: IParamsAddTrans): Promise<IParamsAddTrans> {
      return request.post(`${appApis.ATMS}/people`, { trans }, { headers });
   },
   deleteAtm(id: string): Promise<IDeleteAtmRes> {
      return request.delete(`${appApis.ATMS}/${id}`, { headers });
   },
};

export default AtmServices;
