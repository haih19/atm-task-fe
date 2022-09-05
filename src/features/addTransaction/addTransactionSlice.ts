import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IParamsAddTrans } from '../../types/atm.model';

export const addTrans = createAsyncThunk('addTransaction', async (params: IParamsAddTrans) => {
   const { data } = await axios.post('http://localhost:5001/api/v1/atms/people', params, {
      headers: {
         Authorization: localStorage.getItem('accessToken') as string,
      },
   });
   return data;
});

export interface addTransState {
   loading: boolean;
   success: boolean;
   error: string | null;
}

const initialState: addTransState = {
   loading: false,
   success: false,
   error: null,
};

export const addTransactionSlice = createSlice({
   name: 'addAtm',
   initialState,
   reducers: {},
   extraReducers: {
      [addTrans.pending.toString()]: (state: addTransState) => {
         state.loading = true;
      },
      [addTrans.fulfilled.toString()]: (state: addTransState) => {
         state.loading = false;
         state.success = true;
      },
      [addTrans.rejected.toString()]: (state: addTransState) => {
         state.loading = false;
         state.success = false;
      },
   },
});

export default addTransactionSlice.reducer;
