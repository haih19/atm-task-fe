import { createSlice } from '@reduxjs/toolkit';
import { IUserInfo } from '../../types/register/register.model';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk('register', async (params: IUserInfo) => {
   const { data } = await axios.post('http://localhost:5001/api/v1/auth/register', params);
   return data;
});

export interface UserInfo {
   loading: boolean;
   error: string | null;
   isRegistered: boolean;
}

const initialState: UserInfo = {
   loading: false,
   error: null,
   isRegistered: false,
};

export const registerSlice = createSlice({
   name: 'register',
   initialState,
   reducers: {},
   extraReducers: {
      [register.pending.toString()]: (state: UserInfo) => {
         state.loading = true;
      },
      [register.fulfilled.toString()]: (state: UserInfo, action) => {
         state.isRegistered = Boolean(action.payload.registered);

         state.loading = false;
      },
      [register.rejected.toString()]: (state: UserInfo) => {
         state.loading = false;
      },
   },
});

export default registerSlice.reducer;
