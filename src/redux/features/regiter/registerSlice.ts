import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IRegiterReponse, IUserInfo } from '../../../common/types/auth.model';
import { toast } from 'react-toastify';
import AuthServices from '../../../common/services/auth.service';

export const register = createAsyncThunk('register', async (params: IUserInfo) => {
   const response = await AuthServices.registerAccount(params);
   return response;
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
         console.log(action.payload);

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
