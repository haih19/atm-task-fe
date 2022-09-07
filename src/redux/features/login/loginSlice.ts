import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginReponse, IUserInfo } from '../../../common/types/auth.model';
import { toast } from 'react-toastify';
import AuthServices from '../../../common/services/auth.service';

export const login = createAsyncThunk('login', async (params: IUserInfo) => {
   const response = await AuthServices.loginAccount(params);
   return response;
});

export interface LoginState {
   loading: boolean;
   isLogged: boolean;
   message: string;
   token?: string;
}

const initialState: LoginState = {
   loading: false,
   isLogged: false,
   message: '',
   token: '',
};

export const loginSlice = createSlice({
   name: 'login',
   initialState,
   reducers: {
      resetIsLogged: (state: LoginState) => {
         state.isLogged = false;
      },
   },
   extraReducers: {
      [login.pending.toString()]: (state: LoginState) => {
         state.loading = true;
      },
      [login.fulfilled.toString()]: (state: LoginState, action: PayloadAction<ILoginReponse>) => {
         state.loading = false;
         state.isLogged = action.payload.sign;
         state.message = action.payload.message;
         state.token = action.payload.PRIVATE_TOKEN;
         if (action.payload.sign) {
            toast.success(action.payload.message);
         } else {
            toast.error(action.payload.message);
         }
      },
   },
});

export const { resetIsLogged } = loginSlice.actions;

export default loginSlice.reducer;
