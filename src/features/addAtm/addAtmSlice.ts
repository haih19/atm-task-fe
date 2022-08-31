import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface IParam {
   headers: {
      Authorization: string;
   };
   name: string;
}

export const addAtm = createAsyncThunk('addAtm', async (name: string) => {
   const { data } = await axios.post(
      'http://localhost:5001/api/v1/atms',
      { name },
      {
         headers: {
            Authorization: localStorage.getItem('accessToken') as string,
         },
      }
   );
   return data;
});

export interface IInitialState {
   loading: boolean;
   success: boolean;
   error: string | null;
}

const initialState: IInitialState = {
   loading: false,
   success: false,
   error: null,
};

export const addAtmSlice = createSlice({
   name: 'addAtm',
   initialState,
   reducers: {},
   extraReducers: {
      [addAtm.pending.toString()]: (state: IInitialState) => {
         state.loading = true;
      },
      [addAtm.fulfilled.toString()]: (state: IInitialState) => {
         state.loading = false;
         state.success = true;
      },
      [addAtm.rejected.toString()]: (state: IInitialState) => {
         state.loading = false;
         state.success = false;
      },
   },
});

export default addAtmSlice.reducer;
