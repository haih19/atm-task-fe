import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IParamsAddTrans } from '../../../common/types/atm.model';
import AtmServices from '../../../common/services/atm.service';

export const addTrans = createAsyncThunk('addTransaction', async (params: IParamsAddTrans) => {
   const response = await AtmServices.addATransaction(params);
   return response;
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
