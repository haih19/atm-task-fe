import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IRegiterReponse, IUserInfo } from '../../../common/types/auth.model';
import { toast } from 'react-toastify';
import AuthServices from '../../../common/services/auth.service';

export const register = createAsyncThunk('register', async (params: IUserInfo) => {
   const response = await AuthServices.registerAccount(params);
   return response;
});

export const login = createAsyncThunk('login', async (params: IUserInfo) => {
   const response = await AuthServices.loginAccount(params);
   return response;
});
