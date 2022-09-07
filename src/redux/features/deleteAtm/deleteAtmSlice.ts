import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import AtmServices from '../../../common/services/atm.service';

export const deleteAtm = createAsyncThunk('deleteAtm', async (id: string) => {
   const response = await AtmServices.deleteAtm(id);
   return response;
});

export interface deleteAtmState {
   loading: boolean;
   success: boolean;
   error: string | null;
}

const initialState: deleteAtmState = {
   loading: false,
   success: false,
   error: null,
};

export const deleteAtmSlice = createSlice({
   name: 'addAtm',
   initialState,
   reducers: {
      resetDelete: (state: deleteAtmState) => {
         state.success = false;
      },
   },
   extraReducers: {
      [deleteAtm.pending.toString()]: (state: deleteAtmState) => {
         state.loading = true;
      },
      [deleteAtm.fulfilled.toString()]: (state: deleteAtmState, action) => {
         state.loading = false;
         state.success = true;
         console.log(action.payload);
      },
      [deleteAtm.rejected.toString()]: (state: deleteAtmState) => {
         state.loading = false;
         state.success = false;
      },
   },
});

export const { resetDelete } = deleteAtmSlice.actions;

export default deleteAtmSlice.reducer;
