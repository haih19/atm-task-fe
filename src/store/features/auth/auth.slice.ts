import { RootState } from './../../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import AuthServices from '../../../services/auth/auth.service';
import { IUsers } from '../../../types/auth.model';

interface InitialStateType {
  loading: boolean;
  user: IUsers[];
  error: string;
}

const initialState: InitialStateType = {
  loading: false,
  user: [],
  error: '',
};

export const login = createAsyncThunk('login', async (payload: { email: string; password: string }) => {
  const response = await AuthServices.loginAccount(payload);
  return response;
});

// export const Register = createAsyncThunk('register', async () => {
//   const response = await AuthServices.regiterAccount();
//   return response;
// });

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.toString()]: (state) => {
      state.loading = true;
    },
    [login.fulfilled.toString()]: (state, action) => {
      state.user = action.payload;
    },
    [login.rejected.toString()]: (state) => {
      state.loading = false;
    },
  },
});
export const adminLogin = (state: RootState) => state.auth.user;
export default loginSlice.reducer;
