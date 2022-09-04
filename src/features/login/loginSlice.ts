import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo } from '../../types/register/register.model';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ILoginReponse } from '../../types/auth.model';
import { toast } from 'react-toastify';

export const login = createAsyncThunk('login', async (params: IUserInfo) => {
   const { data } = await axios.post('http://localhost:5001/api/v1/auth/login', params);
   return data;
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
            // localStorage.setItem('accessToken', action.payload.PRIVATE_TOKEN as string);
         } else {
            toast.error(action.payload.message);
         }
      },
   },
});

export const { resetIsLogged } = loginSlice.actions;

export default loginSlice.reducer;
