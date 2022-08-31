import { createSlice } from '@reduxjs/toolkit';
import { IUserInfo } from '../../types/register/register.model';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('login', async (params: IUserInfo) => {
   const { data } = await axios.post('http://localhost:5001/api/v1/auth/login', params);
   return data;
});
export interface IRes {
   message: string;
   user: {};
   sign: boolean;
   PRIVATE_TOKEN: string;
}

export interface IInitialState {
   loading: boolean;
   res: IRes;
   error: string | null;
   isSigned: boolean;
}

const initialState: IInitialState = {
   loading: false,
   res: {
      message: '',
      user: {},
      sign: false,
      PRIVATE_TOKEN: '',
   },
   error: null,
   isSigned: false,
};

export const loginSlice = createSlice({
   name: 'login',
   initialState,
   reducers: {},
   extraReducers: {
      [login.pending.toString()]: (state: IInitialState) => {
         state.loading = true;
      },
      [login.fulfilled.toString()]: (state: IInitialState, action) => {
         state.res = action.payload;
      },
      [login.rejected.toString()]: (state: IInitialState) => {
         state.loading = false;
      },
   },
});

export default loginSlice.reducer;
