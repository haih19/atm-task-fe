export interface IParamsAddTrans {
   namePeople: string;
   transaction: string;
}

export interface IResAtm {
   client: string;
   id: string;
   name: string;
   remove: boolean;
   status: string;
   transaction: number;
}

export interface IResQueue {
   transaction: string;
   name: string;
}

export interface IResGetAtm {
   atm: IResAtm[];
   queue: IResQueue[];
   processedClient: string;
}

export interface IAddPostAtm {
   id: string;
   status: string;
   remove: boolean;
   name: string;
   client: string;
   transaction: number;
}

export interface IAddPeopleRes {
   success: boolean;
   message: string;
}

export interface IDeleteAtmRes {
   id: string;
   status: string;
   remove: boolean;
   name: string;
   client: string;
   transaction: number;
}
