import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRegiterReponse, IUserInfo } from '../../types/auth.model';
import { toast } from 'react-toastify';

export const register = createAsyncThunk('registerThunk', async (params: IUserInfo) => {
   const { data } = await axios.post('http://localhost:5001/api/v1/auth/register', params);
   return data;
});

export interface registerState {
   loading: boolean;
   isRegistered: boolean;
}

const initialState: registerState = {
   loading: true,
   isRegistered: false,
};

export const registerSlice = createSlice({
   name: 'register',
   initialState,
   reducers: {
      resetIsRegisteredState: (state: registerState) => {
         state.isRegistered = false;
      },
   },
   extraReducers: {
      [register.pending.toString()]: (state: registerState) => {
         state.loading = true;
      },
      [register.fulfilled.toString()]: (
         state: registerState,
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
