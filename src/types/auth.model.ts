// export interface IUsers {
//    id: string;
//    email: string;
//    password: string;
// }

export interface IRegiterReponse {
   message?: string;
   error?: string;
   user?: {
      email: string;
      password: string;
      _id: string;
   };
   PRIVATE_TOKEN?: string;
   registered: boolean;
}

export interface ILoginReponse {
   message: string;
   sign: boolean;
   user?: {};
   PRIVATE_TOKEN?: string;
}

export interface IUserInfo {
   email: string;
   password: string;
   confirm?: string;
}
