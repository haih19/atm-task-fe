import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo } from '../../types/register/register.model';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRegiterReponse } from '../../types/auth.model';
import { toast } from 'react-toastify';

export const register = createAsyncThunk('registerThunk', async (params: IUserInfo) => {
   const { data } = await axios.post('http://localhost:5001/api/v1/auth/register', params);
   return data;
});

export interface UserInfo {
   loading: boolean;
   isRegistered: boolean;
}

const initialState: UserInfo = {
   loading: true,
   isRegistered: false,
};

export const registerSlice = createSlice({
   name: 'register',
   initialState,
   reducers: {
      resetIsRegisteredState: (state: UserInfo) => {
         state.isRegistered = false;
      },
   },
   extraReducers: {
      [register.pending.toString()]: (state: UserInfo) => {
         state.loading = true;
      },
      [register.fulfilled.toString()]: (
         state: UserInfo,
         action: PayloadAction<IRegiterReponse>
      ) => {
         state.loading = false;
         state.isRegistered = action.payload.registered;
         if (action.payload.registered) {
            toast.success(action.payload.message);
         } else {
            toast.error(action.payload.error);
         }
      },
   },
});

export const { resetIsRegisteredState } = registerSlice.actions;

export default registerSlice.reducer;
